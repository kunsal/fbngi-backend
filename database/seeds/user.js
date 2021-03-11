const User = require('../../src/models/user')

exports.create = async () => {
  const userM = new User();
  const password = await userM.hash('admin');
  const users = [
    {
      password,
      customerName: 'Olakunle Salami',
      email: 'olakunle@email.com',
      dob: '10/01/1985',
      phone: '08039356925',
    }, 
    {
      password,
      customerName: 'Hassan Hamed',
      email: 'hassan@email.com',
      dob: '28/07/1972',
      phone: '08039356789',
    },
    {
      password,
      customerName: 'Emeka Amadi',
      email: 'emeka@email.com',
      dob: '11/01/1990',
      phone: '07079356928',
    },
    {
      password,
      customerName: 'Bola Arowolo',
      email: 'bola@email.com',
      dob: '02/02/1993',
      phone: '09047883322',
    },
    {
      password,
      customerName: 'Taiwo Oke',
      email: 'taiwo@email.com',
      dob: '22/09/1987',
      phone: '08022352922',
    },
  ]
  try {
    let created = 0;
    for (let i = 0; i < users.length; i++) {
      const getUser = await userM.findBy('email', users[i].email, true);
      if (getUser.rowCount > 0) {
        continue;
      }
      const user = await userM.create(users[i]);
      if (user.rowCount > 0) {
        created++;
      }
    }
    return  `${created} user(s) created successfull`;
  } catch (e) {
    throw new Error(e);
  }
};

require('make-runnable');
