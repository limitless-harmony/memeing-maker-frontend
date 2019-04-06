/* eslint-disable no-unused-vars */
import objectToGetParams from 'helpers/encodeQueryString';
import { name, tagline } from 'helpers';

const text = {
  single: `Check out this meme on ${name}\n\n${tagline}`,
  multiple: `Check out these memes on ${name}\n\n${tagline}`,
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
