import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;


    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },      
    });


    let mailOptions = {
        from: `"Your Website" <${process.env.GMAIL_EMAIL}>`, 
        to: process.env.RECEIVING_EMAIL, 
        replyTo: email, 
        subject: `New Contact from ${name}: ${subject}`,
        text: message, 
        html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`, 
      };
      

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email', error);
        res.status(500).json({ status: 'Error', message: 'Error sending email' });
        return;
      }
      res.status(200).json({ status: 'OK', message: 'Email sent', info: info.response });
    });
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
