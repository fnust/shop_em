import dataSource from '../../../ormconfig.js';

class ShopRepo {
  constructor() {
    this.repository = dataSource.getRepository('Shop');
  }

  async findOne(param) {
    try {
      return await this.repository.findOne({ where: param });
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default ShopRepo;
