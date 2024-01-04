const express = require('express');
const { requestPayment, paymentCallback } = require('../controllers/payStack');

const router = express.Router();

router.get('/', requestPayment);

router.post('/', paymentCallback);

module.exports = router;