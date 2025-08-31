const tekaTeki = require("../../json/tekaTeki.json");

module.exports = async (req, res) => {
  const random = tekaTeki[Math.floor(Math.random() * tekaTeki.length)];
  res.status(200).json({
    success: true,
    data: random
  });
};
