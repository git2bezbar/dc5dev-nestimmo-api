import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;
}
