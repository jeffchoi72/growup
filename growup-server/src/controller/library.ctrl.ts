import { Context } from 'koa';
import { Service } from 'typedi';
import * as yup from 'yup';

import { AuthContext } from '../middlewares/userAuth.middleware';
import LibraryService from '../service/library.service';

@Service()
class LibraryController {
  constructor(private libraryService: LibraryService) {}

  public test = (context: Context) => {
    context.status = 200;
    context.body = 'Hello';
  };

  public getLibraryContents = async (context: AuthContext) => {
    const { id: userId } = context.token;
    const { offset = 0, limit = 10 } = context.query;

    const libraryContents = await this.libraryService.getLibraryContents(offset, limit, userId);

    context.status = 200;
    context.body = {
      code: 'SUCCESS',
      message: '성공',
      data: {
        libraryContents
      }
    };
  };

  public addLibraryContent = async (context: AuthContext) => {
    try {
      const schema = yup.object().shape({
        curationPostId: yup.string().required()
      });

      const isValid = await schema.isValid(context.request.body);

      if (!isValid) {
        context.status = 400;
        context.body = {
          code: 'INVALID_REQUEST_DATA',
          message: '요청 데이터가 올바르지 않습니다',
          data: null
        };
        return;
      }

      const { curationPostId }: { curationPostId: string } = context.request.body;
      const { id: userId } = context.token;

      const existedLibraryContent = await this.libraryService.isExistedLibraryContentByUser(
        curationPostId,
        userId
      );

      if (existedLibraryContent) {
        context.status = 409;
        context.body = {
          code: 'EXISTS_LIBRARY_CONTENT',
          message: '이미 서재에 보관되어 있습니다',
          data: null
        };
        return;
      }

      const libraryContent = await this.libraryService.addLibraryContent(curationPostId, userId);

      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: {
          libraryContent
        }
      };
    } catch (error) {
      context.status = 500;
      context.body = {
        code: 'SERVER_ERROR',
        message: '서버 에러',
        data: null
      };
    }
  };

  public deleteLibraryContent = async (context: AuthContext) => {
    try {
      const { libraryContentId } = context.params;
      const { id: userId } = context.token;

      const isLibraryContentOwner = await this.libraryService.isLibraryContentOwner(
        libraryContentId,
        userId
      );

      if (!isLibraryContentOwner) {
        context.status = 403;
        context.body = {
          code: 'FORBIDDEN_DELETE_LIBRARY_CONTENT',
          message: '서재 콘텐츠를 삭제할 권한이 없습니다',
          data: null
        };
        return;
      }

      await this.libraryService.deleteLibraryContent(libraryContentId);

      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: {
          libraryContentId
        }
      };
    } catch (error) {
      if (error.message === 'Not selected libraryContent') {
        context.status = 404;
        context.body = {
          code: 'NOT_FOUND_LIBRARY_CONTENT',
          message: '삭제할 서재 콘텐츠가 조회되지 않습니다',
          data: null
        };
        return;
      }

      context.status = 500;
      context.body = {
        code: 'SERVER_ERROR',
        message: '서버 에러',
        data: null
      };
    }
  };
}

export default LibraryController;
