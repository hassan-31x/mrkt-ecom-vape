const axios = require('axios');

// const authToken = Buffer.from('xnd_production_RqnFESCCy0vlbrMP8ZukfWxcKuQ9aDc6fGHhGQthRYvpMViB4QhWLtaHwOlLWta').toString('base64');
const authToken = Buffer.from('xnd_development_VrpqFIkJWVrkpidKvADc44ytKHoROyNos7Q2YldS1uhgMpZsLgwxlV5UsqFlXJH:').toString('base64');

async function createInvoice() {
    try {
        const { data, status } = await axios.post('https://api.xendit.co/v2/invoices',
            {
                external_id: 'xendit_test_id_1',
                amount: 110000,
                currency: 'IDR',
                customer: {
                    given_names: 'Ahmad',
                    surname: 'Gunawan',
                    email: 'ahmad_gunawan@example.com',
                    mobile_number: '+6287774441111',
                },
                customer_notification_preference: {
                    invoice_paid: ['email', 'whatsapp']
                },
                success_redirect_url: 'localhost:3000/success',
                failure_redirect_url: 'localhost:3000/failure',
                items: [
                    {
                        name: 'Double Cheeseburger',
                        quantity: 1,
                        price: 7000,
                        category: 'Fast Food'
                    },
                    {
                        name: 'Chocolate Sundae',
                        quantity: 1,
                        price: 3000,
                        category: 'Fast Food'
                    }
                ],
                fees: [
                    {
                        type: "Shipping",
                        value: 10000
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Basic ${authToken}`
                }
            }
        )

        console.log(`Response returned with a status of ${status}`);
        console.log(data);
        
        // const { invoice_url } = data;

        // console.log(`Invoice created! Visit ${invoice_url} to complete payment`)
    } catch (error) {
        console.log("Request failed", error)
    }
}

createInvoice()