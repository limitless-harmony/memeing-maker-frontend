import domToImage from 'dom-to-image';

export const getBase64Image = (canvas, type = 'png') =>
  canvas.toDataURL(`image/${type}`);

export const createImage = async src => {
  const img = document.createElement('img');
  img.setAttribute('src', `${src}`);
  let base64 = '';
  img.onload = () => {
    base64 = getBase64Image(img);
  };
  return base64;
};

export const getCroppedImage = (image, cropArea) => {
  console.log(image, cropArea);
  const canvas = document.createElement('canvas');
  canvas.width = cropArea.width;
  canvas.height = cropArea.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(
    image,
    cropArea.x,
    cropArea.y,
    cropArea.width,
    cropArea.height,
    0,
    0,
    cropArea.width,
    cropArea.height
  );
  const base64 = getBase64Image(canvas);
  return base64;
};

export const getFullImage = image => {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  return getBase64Image(canvas);
};

export const composeImage = async (captureDiv, style) => {
  const dataUrl = await domToImage.toSvg(captureDiv, style);
  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'canvas');
  canvas.width = 800;
  canvas.height = 1200;
  const img = document.createElement('img');
  img.setAttribute('src', `${dataUrl}`);
  img.onload = () => {
    canvas.getContext('2d').drawImage(img, 0, 0, 800, 1200);
    const canvasData = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'meme.png';
    a.href = canvasData;
    document.body.appendChild(a);
    a.click();
  };
};

export const readFile = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => {
      return resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
};
