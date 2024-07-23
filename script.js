
const authToken = Buffer.from(`xnd_development_VrpqFIkJWVrkpidKvADc44ytKHoROyNos7Q2YldS1uhgMpZsLgwxlV5UsqFlXJH:`).toString('base64');

async function createInvoice() {
    // const authToken = Buffer.from(`${process.env.XENDIT_CHECKOUT_API_KEY}:`).toString('base64');
    try {
        const response = await fetch('https://api.xendit.co/v2/invoices', {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${authToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              external_id: 'xendit_test_id_3',
              amount: 110000,
              currency: 'IDR',
              customer: {
                given_names: 'Ahmad',
                surname: 'Gunawan',
                email: 'ahmad_gunawan@example.com',
                mobile_number: '+6287774441111',
              },
              customer_notification_preference: {
                invoice_paid: ['email', 'whatsapp'],
              },
              success_redirect_url: `${NEXT_PUBLIC_SITE_URL}/success`,
              failure_redirect_url: '${NEXT_PUBLIC_SITE_URL}/failure',
              items: [
                {
                  name: 'Double Cheeseburger',
                  quantity: 1,
                  price: 7000,
                  category: 'Fast Food',
                },
                {
                  name: 'Chocolate Sundae',
                  quantity: 1,
                  price: 3000,
                  category: 'Fast Food',
                },
              ],
            //   fees: [
            //     {
            //       type: 'Shipping',
            //       value: 10000,
            //     },
            //   ],
            }),
          });
          
        const data = await response.json();
        console.log('Response data:', data);
          

        const { invoice_url } = data;

    } catch (error) {
        console.log("Request failed", error)
    }
}

createInvoice()