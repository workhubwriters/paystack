const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
async function paymentCallback (req, res){
    try {
        const content = req.body;

        console.log(content);

        res.json({
            success: "Your message was received successfully",
            content
        })
    } catch (error) {
        res.status(500).json({
            message: "There was an error processing your request"
        })
        console.error(error);
    }
}

module.exports  = paymentCallback;