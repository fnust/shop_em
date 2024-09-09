import {
  Between,
  FindOptionsWhere,
  LessThanOrEqual,
  MoreThanOrEqual,
} from 'typeorm';
import { ActionEntity } from '../../entities/Action';
import { QueryI } from '../../../controllers/interfaces';

export function applyConditions(param: QueryI) {
  const { shopId, plu, action, dateFrom, dateTo } = param;
  const whereConditions: FindOptionsWhere<ActionEntity> = {};

  if (plu) {
    whereConditions.remainder = { product: { plu } };
  }

  if (shopId) {
    whereConditions.remainder = Object.assign(whereConditions.remainder || {}, {
      shop: { id: shopId },
    });
  }

  if (action) {
    whereConditions.type = action;
  }

  if (dateFrom && dateTo) {
    whereConditions.createdAt = Between(dateFrom, dateTo);
  } else if (dateTo) {
    whereConditions.createdAt = LessThanOrEqual(dateTo);
  } else if (dateFrom) {
    whereConditions.createdAt = MoreThanOrEqual(dateFrom);
  }

  return whereConditions;
}
