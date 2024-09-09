import ProductRepo from './product/index.js';
import RemainderRepo from './remainder/index.js';
import ShopRepo from './shop/index.js';

export const productRepo = new ProductRepo();
export const shopRepo = new ShopRepo();
export const remainderRepo = new RemainderRepo();
