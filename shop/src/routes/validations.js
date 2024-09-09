import { body, param, query } from 'express-validator';
import { validate } from '../server/middlewares.js';

export const productsGetValidation = [
  query('plu').optional().isNumeric(),
  query('name').optional().isString(),
  validate,
];

export const productPostValidation = [
  body('name').notEmpty().isString(),
  body('plu').notEmpty().isNumeric(),
  validate,
];

export const remaindersGetValidation = [
  query('shopId').optional().isUUID(),
  query('plu').optional().isNumeric(),
  query('quantityOnShelfFrom').optional().isNumeric(),
  query('quantityOnShelfTo').optional().isNumeric(),
  query('quantityInOrderFrom').optional().isNumeric(),
  query('quantityInOrderTo').optional().isNumeric(),
  validate,
];

export const remainderPostValidation = [
  body('shopId').notEmpty().isUUID(),
  body('productId').notEmpty().isUUID(),
  body('quantityOnShelf').notEmpty().isNumeric(),
  body('quantityInOrder').notEmpty().isNumeric(),
  validate,
];

export const remainderPutValidation = [
  param('shopId').notEmpty().isUUID(),
  param('productId').notEmpty().isUUID(),
  param('action').notEmpty().isIn(['increase', 'decrease']),
  body('quantity').notEmpty().isNumeric(),
  validate,
];
