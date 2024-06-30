export default class Product {
    constructor(id, title, description, price, rating, brand) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.rating = rating;
      this.brand = brand;
    }
  
    static fromJson(json) {
      return new Product(json.id, json.title, json.description, json.price, json.rating, json.brand);
    }
  }
  