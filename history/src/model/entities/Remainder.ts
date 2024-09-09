import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ActionEntity } from './Action';
import { ProductEntity } from './Product';
import { ShopEntity } from './Shop';

@Entity('remainder')
export class RemainderEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  quantityOnShelf: number;

  @Column('int')
  quantityInOrder: number;

  @ManyToOne(() => ProductEntity, (product) => product.remainders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;

  @ManyToOne(() => ShopEntity, (shop) => shop.remainders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'shopId' })
  shop: ShopEntity;

  @OneToMany(() => ActionEntity, (history) => history.remainder, {
    cascade: true,
  })
  actions: ActionEntity[];
}
