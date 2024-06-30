import FilterHandler from './FilterHandler';

class BrandFilterHandler extends FilterHandler {
  constructor(brandName) {
    super();
    this.brandName = brandName;
  }

  handle(products) {
    const filtered = products.filter(product => product.brand == this.brandName);
    return super.handle(filtered);
  }
}

export default BrandFilterHandler;
