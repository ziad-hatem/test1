import fetch from "node-fetch";

export default async function POST(req, res) {
  const body = await req.body;
  const html = `
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
      margin: auto;
      background: #ffffff;
      padding: 20px;
    }
    .header {
      background-color: #4CAF50;
      color: white;
      padding: 10px;
      text-align: center;
    }
    .content {
      padding: 20px;
      text-align: left;
    }
    .footer {
      background-color: #333333;
      color: white;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Our NewsLetter!</h1>
    </div>
    <div class="content">
      <p>Thank you for subscribing to our newsletter. We are excited to have you on board. You will now receive the latest news, exclusive offers, and advertising updates directly to your inbox.</p>
      <p>We are committed to bringing you valuable and relevant content. Look out for our emails, which will always be tailored to your interests and needs.</p>
      <p>If you ever decide that you no longer wish to receive these updates, you can unsubscribe at any time using the link provided at the bottom of our emails.</p>
      <p>We look forward to staying connected!</p>
    </div>
    <div class="footer">
      <p>Best regards,</p>
      <p>© 2024 hijautech. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
  const emailData = {
    to: body.email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Welcome From Armana Pharma",
    html: html,
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: emailData.to }] }],
      from: { email: emailData.from }, // Replace with your sender email
      subject: emailData.subject,
      content: [{ type: "text/html", value: emailData.html }],
    }),
  });

  if (!response.ok) {
    console.error("Failed to send email:", await response.text());
    return res.status(500).json({ error: "Failed to send email" });
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return res.status(200).json({ data: "success" });
}
