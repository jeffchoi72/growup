import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Category } from '.';
import Author from './Author';

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
}

export default CurationPost;
