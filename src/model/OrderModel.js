export default class OrderModel {
  id = '';
  cartItems = null;
  shippingInfo = null;

  constructor(id, cartItems, shippingInfo) {
    this.id = id;
    this.cartItems = cartItems;
    this.shippingInfo = shippingInfo;
  }
}
