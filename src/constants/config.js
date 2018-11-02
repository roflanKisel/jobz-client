const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
const API_URL = 'http://localhost:3000';

const CLOUDINARY_UPLOAD_PRESET = 'l0tt3g6i';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/kiselev20060/image/upload';

export {
  iOS,
  API_URL,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
};
