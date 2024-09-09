import { remainderService } from '../../services/index.js';

class RemainderController {
  static async getRemainders(req, res) {
    try {
      const remainders = await remainderService.getList(req.query);

      return res.status(200).send(remainders);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }

  static async createRemainder(req, res) {
    try {
      const { shopId, productId, quantityOnShelf, quantityInOrder } = req.body;
      const remainder = await remainderService.create(
        shopId,
        productId,
        quantityOnShelf,
        quantityInOrder
      );

      return res.status(201).send(remainder);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }

  static async changeOrderRemainder(req, res) {
    try {
      const { shopId, productId, action } = req.params;
      const { quantity } = req.body;

      const remainder = await remainderService.changeOrder(
        shopId,
        productId,
        action,
        quantity
      );

      return res.status(200).send(remainder);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }

  static async changeShelfRemainder(req, res) {
    try {
      const { shopId, productId, action } = req.params;
      const { quantity } = req.body;

      const remainder = await remainderService.changeShelf(
        shopId,
        productId,
        action,
        quantity
      );

      return res.status(200).send(remainder);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }
}

export default RemainderController;
