const https = require('https');
const express = require('express');
const paystackLiveSecret = process.env['PAYSTACK_LIVE_SECRET'];
/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
async function validCountries(request, response) {
    try {
        const options = {
            hostname: 'api.paystack.co',
            port: 443,
            path: '/country',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + paystackLiveSecret
            }
        }

        https.request(options, res => {
            let data = ''

            res.on('data', (chunk) => {
                data += chunk
            });

            res.on('end', () => {
                response.json(JSON.parse(data));
                console.log(JSON.parse(data));
            })
        }).on('error', error => {
            console.error(error)
        })
    } catch (error) {
        res.status(500).json({
            error: 'something went wrong'
        });
        console.log(error);
    }
}

module.exports = validCountries;