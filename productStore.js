import { observable, action } from "mobx";

class ProductStore {
  @observable products = [
    {
      id: 0,
      name: "",
      price: 0,
      description: "",
      quantity: 0,
    },
  ];

  @action addProductDetails(name, price, description, quantity) {
    const id = Math.random().toString(36).substr(2, 9);
    this.products.push({
      id,
      name,
      price,
      description,
      quantity,
    });
  }
}

const productStore = new ProductStore();

export default productStore;
