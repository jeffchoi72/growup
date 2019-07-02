import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import CurationPostCategory from './CurationPostCategory';

@Entity({ name: 'categories' })
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @OneToMany(type => CurationPostCategory, curationPostCategory => curationPostCategory.category, {
    cascade: true
  })
  curationPostCategories: CurationPostCategory[];
}

export default Category;
