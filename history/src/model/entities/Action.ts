import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RemainderEntity } from './Remainder';

@Entity('action')
export class ActionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb')
  changes: object;

  @Column('varchar')
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => RemainderEntity, (remainder) => remainder.actions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'remainderId' })
  remainder: RemainderEntity;
}
