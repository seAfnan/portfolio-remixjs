import nodemailer from "nodemailer";

interface MailOptions {
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async ({ from, subject, text, html }: MailOptions) => {
  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      // host: process.env.EMAIL_HOST, // Use SMTP host
      // port: Number(process.env.EMAIL_PORT), // SMTP port
      service: "Gmail",
      auth: {
        user: process.env.SMTP_EMAIL, // SMTP username
        pass: process.env.SMTP_PASSWORD, // SMTP password
      },
    });

    // Mail options
    const mailOptions = {
      from, // Sender address
      to: process.env.SMTP_EMAIL, // Receiver
      subject, // Subject line
      text, // Plain text body
      html, // HTML body
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log(`Message sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
