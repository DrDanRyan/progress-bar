var ProgressBar = require('progress');

module.exports = function(numItems) {
  return new ProgressBar('Processing :current of :total [:bar] :etas', {total: numItems});
};
