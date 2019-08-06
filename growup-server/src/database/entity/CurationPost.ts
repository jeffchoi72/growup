import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Category } from '.';
import Author from './Author';
import LibraryContent from './LibraryContent';

@Entity({ name: 'curation_posts' })
class CurationPost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'content' })
  content: string;

  @Column({ name: 'thumbnail' })
  thumbnail: string;

  @Column({ name: 'post_url' })
  postURL: string;

  @ManyToOne(type => Author, author => author.id)
  @JoinColumn({ name: 'fk_author_id' })
  author: Author;

  @ManyToMany(type => Category, category => category.name)
  @JoinTable({ name: 'curation_posts_categories' })
  categories: Category[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  @OneToMany(type => LibraryContent, libraryContent => libraryContent.curationPost)
  libraryContents: LibraryContent[];
}

export default CurationPost;
