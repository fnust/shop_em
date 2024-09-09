import dataSource from '../../../ormconfig.js';

class ProductRepo {
  constructor() {
    this.repository = dataSource.getRepository('Product');
  }

  async save(name, plu) {
    try {
      const product = {
        name,
        plu,
      };

      return await this.repository.save(product);
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
        where: {
          ...(param.name && {
            name: param.name,
          }),
          ...(param.plu && {
            plu: param.plu,
          }),
        },
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default ProductRepo;
