// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    // console.log(body);

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;

    const data = {
      to: "info@wearespotlight.co.uk",
      from: "info@wearespotlight.co.uk",
      subject: "New web form message!",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    };

    await mail.send(data);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  res.status(200).json({ status: "Ok" });
};
