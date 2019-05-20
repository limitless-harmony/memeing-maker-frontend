export const humanize = message => {
  message = message.replace(/_/g, ' ');
  return message.charAt(0).toUpperCase() + message.slice(1);
};

export const camelize = string => {
  string = string.replace(/_/g, ' ');
  const words = string.split(' ');
  const capitalized = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join('');
};

const parseId = object => {
  const { _id, ...others } = object;
  others.id = _id;
  return others;
};

export const parseResponse = response => {
  if (Array.isArray(response)) {
    const result = response.map(obj => {
      return parseId(obj);
    });
    return result;
  }
  return parseId(response);
};

// constants
export const name = 'Memeing Maker';
export const tagline = 'Make meaning. Share memes.';
export const orgName = 'Limitless Harmony';
export const loadingText = 'Meaning Loading';
