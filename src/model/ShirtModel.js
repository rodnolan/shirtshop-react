export default class ShirtModel {
  id = '';
  size = '';
  price = 0;
  style = '';
  logo = '';
  color = '';

  constructor(id, size, style, logo, color) {
    this.id = id;
    this.size = size;
    this.style = style;
    this.logo = logo;
    this.color = color;

    let price = 0;
    switch (size) {
      case SIZES.SMALL:
        price = 10;
        break;
      case SIZES.MEDIUM:
        price = 11;
        break;
      case SIZES.LARGE:
        price = 12;
        break;
      default:
        price = 0;
        break;
    }
    this.price = price;
  }

  getDescription() {
    return (
      this.style + ', ' + this.size + ', ' + this.color + ', $' + this.price
    );
  }
}

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

export const STYLES = {
  MEN: 'men',
  WOMEN: 'women'
};

export const LOGOS = {
  COOL: 'cool',
  LAUGHING: 'laughing',
  WORRIED: 'worried',
  PLACEHOLDER: 'placeholder'
};

export const COLORS = {
  RED: 'red',
  BLUE: 'blue',
  WHITE: 'white',
  BLACK: 'black',
  NONE: 'none'
};
