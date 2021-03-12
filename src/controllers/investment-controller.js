
const Investment = require('../models/investment');
const investmentModel = new Investment();


module.exports.me = async (req, res) => {
  const investments = await investmentModel.findBy('customerId', req.user.userId);
  res.send(investments.rows)
}

module.exports.total = async (req, res) => {
  const totalInvestments = await investmentModel.getTotal(req.user.userId);
  res.send(totalInvestments.rows[0].sum);
}

module.exports.summary = async (req, res) => {
  const investment = await investmentModel.findBy(['customerId', 'id'], [req.user.userId, req.params.id]);
  res.send(investment.rows)
}

