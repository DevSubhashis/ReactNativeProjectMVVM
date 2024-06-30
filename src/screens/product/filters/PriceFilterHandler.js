import FilterHandler from './FilterHandler';

class PriceFilterHandler extends FilterHandler {
  constructor(min, max) {
    super();
    this.min = min;
    this.max = max;
  }

  handle(products) {
    const filtered = products.filter(product => (product.price >= this.min && product.price <= this.max));
    return super.handle(filtered);
  }
}

export default PriceFilterHandler;
