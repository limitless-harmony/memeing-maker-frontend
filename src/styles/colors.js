import Color from 'color';

export const black = '#000';
export const white = '#FFF';
export const indigo = '#303F9F';
export const green = '#01BF8D';

export const darken = (color, value) => {
  return Color(color)
    .darken(value)
    .hex();
};
