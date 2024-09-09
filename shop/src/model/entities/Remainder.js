import { EntitySchema } from 'typeorm';

export default new EntitySchema({
  name: 'Remainder',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    quantityOnShelf: {
      type: 'int',
    },
    quantityInOrder: {
      type: 'int',
    },
  },
  relations: {
    shop: {
      target: 'Shop',
      type: 'many-to-one',
      joinColumn: {
        name: 'shopId',
      },
      inverseSide: 'remainders',
    },
    product: {
      target: 'Product',
      type: 'many-to-one',
      joinColumn: {
        name: 'productId',
      },
      inverseSide: 'remainders',
    },
  },
});
