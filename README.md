# Paystack
Paystack integration to workhub writers page
#
For about 8 months we have been receiving payments manualy through paypal from clients, we wish to use a secure and reliable method and Paystack is our go-to.


## Steps:
1. Setup environment variables:
    Get paystack secret key from [Paystack dashboard](https://dashboard.paystack.com/#/settings/developers), *if this link doesn't work just login and find your API keys in the dashboard*
2. Use this app `/ipInfo` to get the public IP address for your server
3. Add our IP address to the white listed IP addresses
4. Make the api request and use the link provided b paystack to complete the payment
5. Check the account ballance


## Next steps
After receiving payment, we want to process the payment and use the info in other parts of the project