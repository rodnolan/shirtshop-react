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
    this.price = PRICES[size.toUpperCase()];
    this.style = style;
    this.logo = logo;
    this.color = color;
  }
}

export const PRICES = {
  SMALL: 10,
  MEDIUM: 11,
  LARGE: 12
};

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
