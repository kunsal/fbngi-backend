const express = require('express');
const dotenv = require('dotenv');
const userController = require('../controllers/user-controller');
const investmentController = require('../controllers/investment-controller');
const authMiddleware = require('../middleware/auth');
dotenv.config();

const router = express.Router();
const urlPrefix = '/api/v1'
router.post(`${urlPrefix}/user/login`, userController.login);
router.get(`${urlPrefix}/investments/me`,[authMiddleware], investmentController.me)
router.get(`${urlPrefix}/investments/me/total`,[authMiddleware], investmentController.total)


module.exports = router;