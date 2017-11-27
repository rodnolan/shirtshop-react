export default class ShirtModel {
  id = '';
  size = 's';
  price = 0;
  isMens = false;
  caption = '';
  color = '';

  constructor(id, size, isMens, caption, color) {
    this.id = id;
    this.size = size;
    this.isMens = isMens;
    this.caption = caption;
    this.color = color;

    let price = 0;
    switch (size) {
      case 'S':
        price = 10;
        break;
      case 'M':
        price = 11;
        break;
      case 'L':
        price = 12;
        break;
      default:
        price = 0;
        break;
    }
    this.price = price;
  }

  getDescription() {
    let gender,
      size = '';
    gender = this.isMens ? 'men' : 'women';
    switch (this.size) {
      case 'S':
        size = 'small';
        break;
      case 'M':
        size = 'medium';
        break;
      case 'L':
        size = 'large';
        break;
      default:
        size = '';
        break;
    }
    return gender + ', ' + size + ', ' + this.color + ', $' + this.price;
  }
}
