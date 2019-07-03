import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import CurationPost from './CurationPost';

@Entity({ name: 'authors' })
class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'icon_url' })
  iconUrl: string;

  @OneToMany(type => CurationPost, curationPost => curationPost.author, { cascade: true })
  curationPost: CurationPost;
}

export default Author;
