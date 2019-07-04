import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CurationPost } from '.';

@Entity({ name: 'categories' })
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @ManyToMany(type => CurationPost, curationPost => curationPost.categories)
  curationPosts: CurationPost[];
}

export default Category;
