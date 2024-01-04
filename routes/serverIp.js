const express = require("express");
const https = require('https');

const router = express.Router();

async function getPublicIP(req, res) {
    // Make a GET request to ipinfo.io using the https module
    const options = {
        hostname: 'ipinfo.io',
        port: 443,
        path: '/',
        method: 'GET',
    };

    const request = https.request(options, (response) => {
        let data = '';

        // A chunk of data has been received.
        response.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received.
        response.on('end', () => {
            const ipAddress = JSON.parse(data).ip;

            res.status(200).json({ ip: ipAddress });
        });
    });

    request.on('error', (error) => {
        console.error('Error fetching public IP:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    });

    // End the request
    request.end();
}

router.get('/', getPublicIP);

module.exports = router;