const Investment = require('../../src/models/investment')

exports.create = async () => {
  const InvestmentModel = new Investment();
  


  const investments = [
    {
      customerId: 1,
      productId: "Savings001",
      date: "01/01/2019",
      amount: 10000
    },
    {
      customerId: 1,
      productId: "Savings001",
      date: "01/02/2019",
      amount: 10000
    },
    {
      customerId: 1,
      productId: "Savings001",
      date: "01/03/2019",
      amount: 10000
    },
    {
      customerId: 1,
      productId: "Savings002",
      date: "03/01/2019",
      amount: 15000
    },
    {
      customerId: 1,
      productId: "Savings002",
      date: "04/02/2019",
      amount: 15000
    },
    {
      customerId: 1,
      productId: "Savings002",
      date: "21/03/2019",
      amount: 15000
    },
    {
      customerId: 2,
      productId: "Savings001",
      date: "01/01/2019",
      amount: 10000
    },
    {
      customerId: 2,
      productId: "Savings001",
      date: "01/02/2019",
      amount: 10000
    },
    {
      customerId: 2,
      productId: "Savings001",
      date: "01/03/2019",
      amount: 10000
    },
    {
      customerId: 2,
      productId: "Savings002",
      date: "03/01/2019",
      amount: 15000
    },
    {
      customerId: 2,
      productId: "Savings002",
      date: "04/02/2019",
      amount: 15000
    },
    {
      customerId: 2,
      productId: "Savings002",
      date: "21/03/2019",
      amount: 15000
    },
    {
      customerId: 3,
      productId: "Savings001",
      date: "01/01/2019",
      amount: 10000
    },
    {
      customerId: 3,
      productId: "Savings001",
      date: "01/02/2019",
      amount: 10000
    },
    {
      customerId: 3,
      productId: "Savings001",
      date: "01/03/2019",
      amount: 10000
    },
    {
      customerId: 3,
      productId: "Savings002",
      date: "03/01/2019",
      amount: 15000
    },
    {
      customerId: 3,
      productId: "Savings002",
      date: "04/02/2019",
      amount: 15000
    },
    {
      customerId: 3,
      productId: "Savings002",
      date: "21/03/2019",
      amount: 15000
    },
    {
      customerId: 4,
      productId: "Savings001",
      date: "01/01/2019",
      amount: 10000
    },
    {
      customerId: 4,
      productId: "Savings001",
      date: "01/02/2019",
      amount: 10000
    },
    {
      customerId: 4,
      productId: "Savings001",
      date: "01/03/2019",
      amount: 10000
    },
    {
      customerId: 4,
      productId: "Savings002",
      date: "03/01/2019",
      amount: 15000
    },
    {
      customerId: 4,
      productId: "Savings002",
      date: "04/02/2019",
      amount: 15000
    },
    {
      customerId: 4,
      productId: "Savings002",
      date: "21/03/2019",
      amount: 15000
    },
    {
      customerId: 5,
      productId: "Savings001",
      date: "01/01/2019",
      amount: 10000
    },
    {
      customerId: 5,
      productId: "Savings001",
      date: "01/02/2019",
      amount: 10000
    },
    {
      customerId: 5,
      productId: "Savings001",
      date: "01/03/2019",
      amount: 10000
    },
    {
      customerId: 5,
      productId: "Savings002",
      date: "03/01/2019",
      amount: 15000
    },
    {
      customerId: 5,
      productId: "Savings002",
      date: "04/02/2019",
      amount: 15000
    },
    {
      customerId: 5,
      productId: "Savings002",
      date: "21/03/2019",
      amount: 15000
    }
  ];
  
  try {
    let created = 0;
    for (let i = 0; i < investments.length; i++) {
      const investment = await InvestmentModel.create(investments[i]);
      if (investment.rowCount > 0) {
        created++;
      }
    }
    return  `${created} investment(s) created successfull`;
  } catch (e) {
    throw new Error(e);
  }
};

require('make-runnable');
