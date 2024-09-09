import dataSource from '../../../ormconfig.js';
import { applyConditions } from './conditions.js';

class RemainderRepo {
  constructor() {
    this.repository = dataSource.getRepository('Remainder');
  }

  async save(shop, product, quantityOnShelf, quantityInOrder) {
    try {
      const remainder = {
        shop,
        product,
        quantityOnShelf,
        quantityInOrder,
      };

      return await this.repository.save(remainder);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async update(id, data) {
    try {
      return await this.repository.update(id, data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async findOne(param) {
    try {
      return await this.repository.findOne({ where: param });
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async find(param) {
    try {
      return await this.repository.find({
        select: {
          quantityInOrder: true,
          quantityOnShelf: true,
          shop: { id: true },
          product: { id: true },
        },
        where: applyConditions(param),
        relations: { shop: true, product: true },
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default RemainderRepo;
