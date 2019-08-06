import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import CurationPost from './CurationPost';
import Library from './Library';

@Entity({ name: 'libraryContents' })
class LibraryContent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => CurationPost, curationPost => curationPost.id)
  @JoinColumn({ name: 'fk_curation_post_id' })
  curationPost: CurationPost;

  @ManyToOne(type => Library, library => library.id)
  @JoinColumn({ name: 'fk_library_id' })
  library: Library;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;
}

export default LibraryContent;
