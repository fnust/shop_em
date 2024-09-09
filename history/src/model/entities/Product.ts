import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RemainderEntity } from './Remainder';

@Entity('product')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('int')
  plu: number;

  @OneToMany(() => RemainderEntity, (remainder) => remainder.product, {
    cascade: true,
  })
  remainders: RemainderEntity[];
}
