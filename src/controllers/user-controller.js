const User = require('../models/user');

const userModel = new User();

const loginErrorMessage = 'Invalid email/password';

module.exports.login = async(req, res) => {
  try {
    const emailAddr = req.body.email.toLowerCase();
    const userPass = req.body.password;
    if (emailAddr === undefined || emailAddr === '' || userPass === undefined || userPass === '') { 
      return res.status(400).send({status: 'error', error: loginErrorMessage}); 
    }

    const user = await userModel.findBy('email', emailAddr);
    if (user.rowCount < 1) return res.status(400).send({status: 'error', error: loginErrorMessage})
    const currentUser = user.rows[0];
    const { id, customername, email, dob, phone, password } = currentUser;
    const validPassword = await userModel.verify(req.body.password, password);
    if (!validPassword) return res.status(400).send({status: 'error', error: loginErrorMessage})
    const token = userModel.generateAuthToken(currentUser);
    const data = { token, userId: id, customername, email, dob, phone };
    res.send(data);
  } catch (e) {
    console.log(e);
  }
}