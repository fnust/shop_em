import { Router } from 'express';
import ProductController from '../controllers/product/index.js';
import {
  productPostValidation,
  productsGetValidation,
  remainderPostValidation,
  remainderPutValidation,
  remaindersGetValidation,
} from './validations.js';
import RemainderController from '../controllers/remainder/index.js';

let router = Router();

router
  .route('/products')
  .get(productsGetValidation, ProductController.getProducts);
router
  .route('/product')
  .post(productPostValidation, ProductController.createProduct);

router
  .route('/remainders')
  .get(remaindersGetValidation, RemainderController.getRemainders);
router
  .route('/remainder')
  .post(remainderPostValidation, RemainderController.createRemainder);
router
  .route('/remainder/shelf/:shopId/:productId/:action')
  .put(remainderPutValidation, RemainderController.changeShelfRemainder);
router
  .route('/remainder/order/:shopId/:productId/:action')
  .put(remainderPutValidation, RemainderController.changeOrderRemainder);

export default router;
