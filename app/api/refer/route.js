// import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import SibApi from "sib-api-v3-sdk";
// import { ApiClient } from "@getbrevo/brevo";
import * as SibApiV3Sdk from '@sendinblue/client'

import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("I entered")
  const body = await request.json();
    try {
      const {
        senderEmail,
        receiverEmail,
        firstName,
        lastName,
      } = body;


      let apiInstance = new SibApiV3Sdk.ContactsApi();
      apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, process.env.NEXT_PUBLIC_BREVO_API_KEY)
      let createContact = new SibApiV3Sdk.CreateContact();

      console.log(receiverEmail)

      createContact.email = receiverEmail;
      createContact.attributes = {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        // ADDRESS : shippingAdress,
        // CITY : city,
        // COUNTRY : country,
        // POSTALCODE : postalCode
      }
      createContact.listIds = [2];

      const res_cont = await apiInstance.createContact(createContact).then(
        function (data) {
          console.log(
            "API called successfully. Returned data: " + JSON.stringify(data)
          );
        },
        function (error) {
          console.error("ERROR", error);
        }
      );
      console.log("Contact",res_cont);

      // Configure API key authorization: api-key

      // Uncomment below two lines to configure authorization using: partner-key
      // var partnerKey = defaultClient.authentications['partner-key'];
      // partnerKey.apiKey = 'YOUR API KEY';
      var apiInstance2 = new SibApiV3Sdk.TransactionalEmailsApi();
      apiInstance2.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.NEXT_PUBLIC_API_KEY)
      var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

      sendSmtpEmail = {
        to: [
          {
            email: receiverEmailemail ,
          },
        ],
        templateId: 1,
        params: {
          firstName: firstName ,
          lastName: lastName ,
        },
        headers: {
          "X-Mailin-custom":
            "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
          "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY,
          "content-type": "application/json",
          accept: "application/json",
        },
      };

      const res3 = await apiInstance2.sendTransacEmail(sendSmtpEmail).then(
        function (data) {
          console.log("API called successfully. Returned data: " + data);
        },
        function (error) {
          console.error(error);
        }
      );
      console.log(res3)
    //   if (!user) {
    //     let apiInstance = new SibApiV3Sdk.ContactsApi();
    //   apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, process.env.NEXT_PUBLIC_API_KEY as string)
    //   let createContact = new SibApiV3Sdk.CreateContact();
    //   console.log(email)
    //   createContact.email = email ;
    //   createContact.attributes = {
    //     FIRSTNAME : firstName,
    //     LASTNAME : lastName,
    //     ADDRESS : shippingAdress,
    //     CITY : city,
    //     COUNTRY : country,
    //     POSTALCODE : postalCode
    //   }
    //   createContact.listIds = [2];

    //   const res_cont = await apiInstance.createContact(createContact).then(
    //     function (data: any) {
    //       console.log(
    //         "API called successfully. Returned data: " + JSON.stringify(data)
    //       );
    //     },
    //     function (error: any) {
    //       console.error("ERROR", error);
    //     }
    //   );
    //   console.log("Contact",res_cont);;
    //   }
      return NextResponse.json('user');
    } catch {
      console.log("error");
    }
  }
