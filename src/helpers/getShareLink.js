/* eslint-disable no-unused-vars */
import objectToGetParams from 'helpers/encodeQueryString';

const slogan = 'Make meaning. Share memes.';
const text = {
  single: `Check out this meme on memeing maker\n\n${slogan}`,
  multiple: `Check out these memes on memeing maker\n\n${slogan}`,
};

const getShareLink = (url, network, contentType = 'single') => {
  const content = text[contentType];
  const options = {
    facebook: {
      link: 'https://www.facebook.com/sharer/sharer.php',
      u: url,
      quote: content,
    },

    twitter: {
      link: 'https://twitter.com/share',
      url,
      text: content,
      hashtags: 'meme,fun,game',
    },

    whatsapp: {
      link: 'https://api.whatsApp.com/send',
      text: `${content} ${url}`,
    },

    linkedin: {
      link: 'https://linkedin.com/shareArticle',
      mini: true,
      url,
      title: content,
    },
  };
  const { link, ...rest } = options[network];
  return `${link}${objectToGetParams(rest)}`;
};

export default getShareLink;
