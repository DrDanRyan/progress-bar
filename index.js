var ProgressBar = require('progress');

module.exports = function(numItems) {
  return new ProgressBar('Processing [:bar] :percent :etas', {total: numItems});
};
