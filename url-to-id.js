const PORT = require('./port');

module.exports = function urlToId(url) {
  const blobRef = url.split(`http://localhost:${PORT}/get/`)[1];
  return decodeURIComponent(blobRef);
}