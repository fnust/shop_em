import { Between, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

export function applyConditions(param) {
  const {
    shopId,
    plu,
    quantityOnShelfFrom,
    quantityOnShelfTo,
    quantityInOrderFrom,
    quantityInOrderTo,
  } = param;
  const whereConditions = {};

  if (plu) {
    whereConditions.product = { plu };
  }

  if (shopId) {
    whereConditions.shop = { id: shopId };
  }

  if (quantityOnShelfFrom && quantityOnShelfTo) {
    whereConditions.quantityOnShelf = Between(
      quantityOnShelfFrom,
      quantityOnShelfTo
    );
  } else if (quantityOnShelfTo) {
    whereConditions.quantityOnShelf = LessThanOrEqual(quantityOnShelfTo);
  } else if (quantityOnShelfFrom) {
    whereConditions.quantityOnShelf = MoreThanOrEqual(quantityOnShelfFrom);
  }

  if (quantityInOrderFrom && quantityInOrderTo) {
    whereConditions.quantityInOrder = Between(
      quantityInOrderFrom,
      quantityInOrderTo
    );
  } else if (quantityInOrderTo) {
    whereConditions.quantityInOrder = LessThanOrEqual(quantityInOrderTo);
  } else if (quantityInOrderFrom) {
    whereConditions.quantityInOrder = MoreThanOrEqual(quantityInOrderFrom);
  }

  return whereConditions;
}
