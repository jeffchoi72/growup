import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import CurationPostCategory from './CurationPostCategory';
import Platform from './Platform';

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
  postUrl: string;

  @ManyToOne(type => Platform, platform => platform.id)
  @JoinColumn({ name: 'fk_platform_id' })
  platform: Platform;

  @OneToMany(
    type => CurationPostCategory,
    curationPostCategory => curationPostCategory.curationPost,
    { cascade: true }
  )
  curationPostCategories: CurationPostCategory[];
}

export default CurationPost;
