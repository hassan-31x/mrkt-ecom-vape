// import { client, sanityAdminClient } from "@/sanity/lib/client.js";
import { NextResponse } from "next/server";

const authToken = Buffer.from(`${process.env.XENDIT_CHECKOUT_API_KEY}:`).toString('base64');


// const generateRandomString = (length) => {
//   let result = "";
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// };

// const getData = (sessionDetails) => {
//   const prices = JSON.parse(sessionDetails?.metadata.prices);
//   const productIds = JSON.parse(sessionDetails?.metadata.productIds);
//   const colors = JSON.parse(sessionDetails?.metadata.colors);
//   const warrantyIds = JSON.parse(sessionDetails?.metadata.warrantyId);

//   const productInfo = [];

//   // Assuming all arrays have the same length
//   for (let i = 0; i < prices.length; i++) {
//     const newObj = {
//       _key: `${generateRandomString(10)}`,
//       id: `${productIds[i]}`,
//       base_price: prices[i],
//       warrantyId: `${warrantyIds[i]}`,
//       color: colors[i],
//     };
//     productInfo.push(newObj);
//   }
//   return {
//     email: sessionDetails?.customer_details?.email,
//     name: sessionDetails?.customer_details?.name,
//     shippingPrice: sessionDetails?.total_details?.amount_shipping / 100,
//     subTotal: sessionDetails?.amount_subtotal / 100,
//     totalPrice: sessionDetails?.amount_total / 100,
//     productInfo,
//   };
// };

// const checkOrder = async (orderId) => {
//   const orders = await client.fetch(`*[_type == "orders" && id == $id]`, {
//     id: orderId,
//   });
//   return orders?.length > 0;
// };

// const createItemInDocument = async (item) => {
//   try {
//     const response = await sanityAdminClient.createIfNotExists(item);
//     return response;
//   } catch (error) {
//     console.error("Error adding item:", error.message);
//     throw error;
//   }
// };

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams
    const sessionId = searchParams.get('sessionId')

    if (sessionId) {
      const response = await fetch(`https://api.xendit.co/v2/invoices/?external_id=${sessionId}`, {
        headers: {
            'Authorization': `Basic ${authToken}`,
        },
      })

    //   const data = getData(sessionDetails);

    //   const orderExists = await checkOrder(sessionId);

    //   if (!orderExists) {
    //     const doc = {
    //       _id: `${generateRandomString(10)}`,
    //       _type: "orders",
    //       id: sessionId,
    //       createdAt: new Date().toISOString(),
    //       ...data,
    //     };

    //     await createItemInDocument(doc);
    //   }
    const data = await response.json();
    console.log("🚀 ~ GET ~ data", data)

      return NextResponse.json(data);
    } else {
      return NextResponse.json({ message: "No session id" });
    }
  } catch (err) {
    console.log(err);
    const errorMessage =
      err instanceof Error ? err.message : "Session ID not found";
    return NextResponse.json({ statusCode: 404, message: errorMessage });
  }
}