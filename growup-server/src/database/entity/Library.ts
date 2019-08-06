import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import LibraryContent from './LibraryContent';
import User from './User';

@Entity({ name: 'libraries' })
class Library {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'description' })
  description: string;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  @ManyToOne(type => User, user => user.id)
  @JoinColumn({ name: 'fk_user_id' })
  user: User;

  @OneToMany(type => LibraryContent, libraryContent => libraryContent.library)
  libraryContents: LibraryContent[];
}

export default Library;
