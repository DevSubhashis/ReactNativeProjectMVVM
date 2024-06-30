import Product from './/models/Product';

const API_URL = 'https://dummyjson.com/products';

class ProductService {
  static async fetchProducts() {
    try {
      let response = await fetch('https://dummyjson.com/products')
      response = await response.json(); 
      return response.products.map(item => Product.fromJson(item));
    } catch (error) {
      throw new Error('Error fetching products: ' + error.message);
    }
  }
}

export default ProductService;
