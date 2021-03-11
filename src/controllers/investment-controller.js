const Investment = require('../models/investment');

const investmentModel = new Investment();

module.exports.summary = async (req, res) => {
  const investments = await investmentModel.findBy('customerId', req.user.userId);
  res.send(investments.rows)
}