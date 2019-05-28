export const baseSize = 16;

export const calculateRem = px => `${parseInt(px, 10) / baseSize}rem`;

export const mobileWidth = 420;

export const pxToVw = (px, width) => `${(100 * px) / width}vw`;

export const setFontSize = (text, small) => {
  const lowerCharacter = 24;
  const upperCharacter = 70;
  const lowerFontSize = small ? 8 : 20;
  const upperFontSize = small ? 14 : 28;
  const fontSizeRange = upperFontSize - lowerFontSize;
  const characterRange = upperCharacter - lowerCharacter;
  let fontSize =
    text.length > lowerCharacter
      ? upperFontSize -
        (fontSizeRange / characterRange) * (text.length - lowerCharacter)
      : upperFontSize;
  fontSize = fontSize > lowerFontSize ? fontSize : lowerFontSize;
  return fontSize;
};

export const setTextAreaHeight = (text, size) => {
  const lineCharacters = 24;
  const minHeight = 45;
  const maxHeight = size / 6;

  const { length } = text;
  const calculatedHeight = minHeight + (length - lineCharacters) * 2;
  const height =
    length <= lineCharacters
      ? minHeight
      : calculatedHeight < maxHeight
      ? calculatedHeight
      : maxHeight;
  return height;
};
