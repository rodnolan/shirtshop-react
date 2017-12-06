export default class CartItemModel {
  id = '';
  shirt = null;
  quantity = 0;
  subTotal = 0;

  constructor(id, shirt, quantity) {
    this.id = id;
    this.shirt = shirt;
    this.quantity = quantity;
    this.subTotal = shirt.price * quantity;
  }
}
