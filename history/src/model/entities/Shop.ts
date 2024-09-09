import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RemainderEntity } from './Remainder';

@Entity('shop')
export class ShopEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @OneToMany(() => RemainderEntity, (remainder) => remainder.shop, {
    cascade: true,
  })
  remainders: RemainderEntity[];
}
