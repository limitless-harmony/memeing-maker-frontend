import Color from 'color';

export const black = '#000';
export const white = '#FFF';
export const buttonBorder = '#979797';
export const inputFill = '#F4F4F4';
export const green = '#01BF8D';

export const darken = (color, value) => {
  return Color(color)
    .darken(value)
    .hex();
};
