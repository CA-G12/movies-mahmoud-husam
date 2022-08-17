const path = require('path');

const serverErrors = (err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', 'serverError.html'));
};

module.exports = serverErrors;
