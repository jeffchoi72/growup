import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import CurationPost from './CurationPost';

@Entity({ name: 'platform' })
class Platform {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'icon_url' })
  iconUrl: string;

  @Column({ name: 'site_url' })
  siteURL: string;

  @OneToMany(type => CurationPost, curationPost => curationPost.platform, { cascade: true })
  curationPost: CurationPost;
}

export default Platform;
