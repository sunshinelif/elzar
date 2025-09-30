import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req){
  const { fullname, phone, email, message } = await req.json();
  console.log(fullname, phone, email, message)
  const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'email-smtp.us-east-1.amazonaws.com',
  port: process.env.EMAIL_PORT || 587, 
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'AKIAYUK7HIC4SWY3ZLFP',
    pass: process.env.EMAIL_PASS || 'BLZgzW1lXQTyJEHALWeqCfnrnr7X6WD+c7ASHeXbkGPz',
  },
  });

  const mailOptions = {
    from: `"Website Contact Form" <richard@erisogroup.com>`,
    to: `richard@erisogroup.com`,
    subject: "New Client!",
    text: "Hello world?",
    html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Website Contact Form - New Client Inquiry</title>
          </head>
          <body>
            <h2>New Client Inquiry from Website Contact Form</h2>
            <p><strong>Sender Details:</strong></p>
            <ul>
              <li><strong>Name:</strong> ${fullname}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Email:</strong> ${email}</li>
            </ul>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </body>
        </html>
        `,
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ status: 400 });

  }

}