import { EntitySchema } from 'typeorm';

export default new EntitySchema({
  name: 'Shop',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    name: {
      type: 'varchar',
      unique: true,
    },
  },
  relations: {
    remainders: {
      target: 'Remainder',
      type: 'one-to-many',
      cascade: true,
      inverseSide: 'shop',
    },
  },
});
