import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Category from './Category';
import CurationPost from './CurationPost';

@Entity({ name: 'curation_post_categories' })
class CurationPostCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'curation_post_id' })
  curationPostId: string;

  @ManyToOne(type => CurationPost, curationPost => curationPost.id)
  @JoinColumn({ name: 'fk_curation_post_id' })
  curationPost: CurationPost;

  @ManyToOne(type => Category, category => category.curationPostCategories)
  @JoinColumn({ name: 'fk_category_id' })
  category: Category;
}

export default CurationPostCategory;
