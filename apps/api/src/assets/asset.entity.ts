import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from '../tags/tag.entity';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // clip | audio

  @Column({ nullable: true })
  duration: number;

  @Column({ nullable: true })
  resolution: string;

  @Column()
  storage_key: string;

  @Column({ type: 'json', nullable: true })
  metadata: any;

  @ManyToMany(() => Tag, (tag) => tag.assets)
  @JoinTable()
  tags: Tag[];
}
