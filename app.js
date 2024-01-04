require('dotenv').config();

const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.json({ message: 'Connection was successful', status: 200 });
});

app.use('/paystack', require('./routes/payStack'));

app.use('/ipInfo', require('./routes/serverIp'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});