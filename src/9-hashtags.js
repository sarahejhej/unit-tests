export const hashtags = text => {
  text = text.split(' ');
  for (let i = 0; i < text.length; i++) {
    if (text[i].charAt(0) !== '#') {
      text.splice(i, 1);
      i--;
    }
  }
  return text;
};
