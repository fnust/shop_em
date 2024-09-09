import { EntitySchema } from 'typeorm';

export default new EntitySchema({
  name: 'Product',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    plu: {
      type: 'int',
      unique: true,
    },
    name: {
      type: 'varchar',
    },
  },
  relations: {
    remainders: {
      target: 'Remainder',
      type: 'one-to-many',
      cascade: true,
      inverseSide: 'product',
    },
  },
});
