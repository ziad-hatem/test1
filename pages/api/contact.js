import fetch from "node-fetch";

export default async function POST(req, res) {
  const body = await req.body;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #fff;
      padding: 20px;
    }
    .header {
      background: #007bff;
      color: #ffffff;
      padding: 10px;
      text-align: center;
    }
    .content {
      padding: 20px;
      text-align: left;
    }
    .footer {
      background: #333;
      color: #ffffff;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>hijautech</h1>
    </div>
    <div class="content">
      <p>Dear <strong>${body.name}</strong>,</p>
      <p>We are reaching out to discuss opportunities that align with your online goals.</p>
      <p>Please find the contact details below:</p>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone Number:</strong> ${body.number}</p>
      <p><strong>Online Goals:</strong> ${body.message}</p>
      <p>We look forward to hearing from you soon.</p>
    </div>
    <div class="footer">
      <p>© 2024 hijautech. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`
  const receivedmessage = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #fff;
      padding: 20px;
    }
    .header {
      background: #007bff;
      color: #ffffff;
      padding: 10px;
      text-align: center;
    }
    .content {
      padding: 20px;
      text-align: left;
    }
    .footer {
      background: #333;
      color: #ffffff;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>hijautech</h1>
    </div>
    <div class="content">
      <p>Dear <strong>${body.name}</strong>,</p>
      <p>Thank you for submitting the form.</p>
      <p>We will get back to you soon.</p>
    </div>
    <div class="footer">
      <p>© 2024 hijautech. All rights reserved.</p>
    </div>
  </div>
</body>
</html>

  `;

  await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: body.email }],
        },
      ],
      from: { email: "missiondesk@matrixtudios.com" }, // Replace with your sender email
      subject: "New Message!",
      text: "hello",
      content: [
        { type: "text/html", value: html },
      ],
    }),
  });
  await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: body.email }] }],
      from: { email: "missiondesk@matrixtudios.com" }, // Replace with your sender email
      subject: "Auto Reply",
      text: receivedmessage,
      content: [{ type: "text/html", value: receivedmessage }],
    }),
  });

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return res.status(200).json({ data: body });
}
