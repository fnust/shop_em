import {
  productRepo,
  remainderRepo,
  shopRepo,
} from '../../model/repositories/index.js';
import { sendAction, getNewQuantity } from './helper.js';

export default class RemainderService {
  async getList(param) {
    return await remainderRepo.find(param);
  }

  async create(shopId, productId, quantityOnShelf, quantityInOrder) {
    const { shop, product } = await this.getShopAndProduct(shopId, productId);

    let remainder = await remainderRepo.findOne({ shop, product });
    if (remainder) {
      throw new Error('Такой остаток уже существует');
    }

    remainder = await remainderRepo.save(
      shop,
      product,
      +quantityOnShelf,
      +quantityInOrder
    );
    if (!remainder) {
      throw new Error('Не удалось создать остаток');
    }

    await this.createAction({
      oldState: {},
      type: 'create',
      remainderId: remainder.id,
    });

    return remainder;
  }

  async changeOrder(shopId, productId, action, quantity) {
    const { shop, product } = await this.getShopAndProduct(shopId, productId);

    let remainder = await remainderRepo.findOne({ shop, product });
    if (!remainder) {
      throw new Error('Такого остатка не существует');
    }

    const result = await remainderRepo.update(remainder.id, {
      quantityInOrder: getNewQuantity(
        +remainder.quantityInOrder,
        +quantity,
        action
      ),
    });

    if (result.affected != 1) {
      throw new Error('Не удалось изменить остаток');
    }

    await this.createAction({
      oldState: remainder,
      type: action,
      remainderId: remainder.id,
    });

    return await remainderRepo.findOne({ shop, product });
  }

  async changeShelf(shopId, productId, action, quantity) {
    const { shop, product } = await this.getShopAndProduct(shopId, productId);

    let remainder = await remainderRepo.findOne({ shop, product });
    if (!remainder) {
      throw new Error('Такого остатка не существует');
    }

    const result = await remainderRepo.update(remainder.id, {
      quantityOnShelf: getNewQuantity(
        +remainder.quantityOnShelf,
        +quantity,
        action
      ),
    });

    if (result.affected != 1) {
      throw new Error('Не удалось изменить остаток');
    }

    await this.createAction({
      oldState: remainder,
      type: action,
      remainderId: remainder.id,
    });

    return await remainderRepo.findOne({ shop, product });
  }

  async getShopAndProduct(shopId, productId) {
    const product = await productRepo.findOne({ id: productId });
    const shop = await shopRepo.findOne({ id: shopId });

    if (!product || !shop) {
      throw new Error(
        'Не удалось создать остаток. Товара или магазина не существует'
      );
    }

    return { product, shop };
  }

  async createAction(body) {
    const result = await sendAction(body);

    if (!result) {
      throw new Error('Не удалось создать историю товара');
    }
  }
}
