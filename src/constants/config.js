const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
const API_URL = 'http://localhost:3000';

export {
  iOS,
  API_URL,
};
