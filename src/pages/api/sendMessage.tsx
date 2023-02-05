import type { NextApiRequest, NextApiResponse } from 'next'
import emailjs from '@emailjs/browser';
//TODO: emailjs can't be used in server side, find an alternative

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return;
  }
  const apiKey = process.env.EMAIL_VAILD_API_KEY;
      // console.log("apiKey: ", apiKey);
      const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey;
      try {
        const {data} = req.body;
        const vaildationResponse = await fetch(apiURL + '&email=' + data.from_email);
        const vaildationData = await vaildationResponse.json();
        console.log(vaildationData);
        if (vaildationData.is_smtp_valid.value) {
          const serviceID: string = process.env.EMAILJS_SERVICE_ID!;
          const templateID: string = process.env.EMAILJS_TEMPLATE_ID!;
          const publicKey: string = process.env.EMAILJS_PUBLIC_KEY!;
          emailjs.send(serviceID, templateID, data, publicKey).then(
            result => {
              res.status(200).json({message: 'Thanks for reaching out! We will get back to you shortly.'});
              console.log(result.text);
            },
            error => {
              res.status(500).json({message: 'Something went wrong. Please try again later.'});
              console.error("ffffffff", error);
            },
          );
        } else {
          res.status(400).json({message: 'Please enter a valid email address'});
        }
      } catch (error) {
        res.status(500).json({message: 'Something went wrong. Please try again later.'});
        console.error(error);
      }
}
