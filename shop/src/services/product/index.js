import { productRepo } from '../../model/repositories/index.js';

export default class ProductService {
  async getList(param) {
    return await productRepo.find(param);
  }

  async create(name, plu) {
    const product = await productRepo.save(name, plu);

    if (!product) {
      throw new Error('Не удалось создать товар');
    }

    return product;
  }
}
