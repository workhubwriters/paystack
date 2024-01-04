const express = require('express');
const { requestPayment, paymentCallback, validCountries } = require('../controllers/payStack');

const router = express.Router();

router.get('/validCountries', validCountries);
router.get('/', requestPayment);
router.post('/', paymentCallback);

module.exports = router;