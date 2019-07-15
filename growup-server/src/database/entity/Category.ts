import { Entity, ManyToMany, PrimaryColumn } from 'typeorm';

import { CurationPost } from '.';

@Entity({ name: 'categories' })
class Category {
  @PrimaryColumn({ name: 'name' })
  name: string;

  @ManyToMany(type => CurationPost, curationPost => curationPost.categories)
  curationPosts: CurationPost[];
}

export default Category;
