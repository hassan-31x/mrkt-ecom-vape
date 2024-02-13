import { NextResponse } from "next/server";
import * as SibApiV3Sdk from "@sendinblue/client";

import { sanityAdminClient } from "@/sanity/lib/client";

const saveInSanity = async (referralEmail, referredEmail, code) => {
  const res = await sanityAdminClient.create({
    _type: "referral",
    referralEmail: referralEmail,
    referredEmail: referredEmail,
    referralCode: code,
    referAvailed: false,
    dateOfReferral: new Date(),
  });
};

export async function POST(request) {
  const body = await request.json();
  try {
    const { referralEmail, referredEmail, firstName, lastName, url } = body;
    const CODE =
      Math.random().toString(36).substring(2, 6) +
      Math.floor(Math.random() * 10);

    let apiInstance = new SibApiV3Sdk.ContactsApi();
    apiInstance.setApiKey(
      SibApiV3Sdk.ContactsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );
    let createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = referredEmail;
    createContact.attributes = {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
    };
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

    var apiInstance2 = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance2.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
      to: [
        {
          email: referredEmail,
        },
      ],
      templateId: 1,
      params: {
        firstName: firstName,
        lastName: lastName,
        signin_url: `${url}?code=${CODE}`,
      },
      headers: {
        "X-Mailin-custom":
          "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
        "api-key": process.env.BREVO_API_KEY,
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

    await saveInSanity(referralEmail, referredEmail, CODE);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (e) {
    console.log("error", e);
    return NextResponse.error(e);
  }
}
