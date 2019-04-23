export const baseSize = 16;

export const calculateRem = px => `${parseInt(px, 10) / baseSize}rem`;

export const mobileWidth = 420;

export const pxToVw = (px, width) => `${(100 * px) / width}vw`;

export const setFontSize = (text, small) => {
  const lowerCharacter = 30;
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
