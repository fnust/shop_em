import { productService } from '../../services/index.js';

class ProductController {
  static async getProducts(req, res) {
    try {
      const remainders = await productService.getList(req.query);

      return res.status(200).send(remainders);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }

  static async createProduct(req, res) {
    try {
      const { name, plu } = req.body;
      const product = await productService.create(name, +plu);

      return res.status(201).send(product);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }
}

export default ProductController;
