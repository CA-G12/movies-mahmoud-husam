const path = require('path');

// const key = process.parsed.API_KEY;
const movePage = (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'move.html');
  res.status(200).sendFile(filePath);
};
module.exports = movePage;
