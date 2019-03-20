export const baseSize = 16;

export const calculateRem = px => `${parseInt(px, 10) / baseSize}rem`;