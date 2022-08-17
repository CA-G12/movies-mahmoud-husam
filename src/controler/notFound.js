const path = require('path');

const clientErrors = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'notFound.html'));
};

module.exports = clientErrors;
