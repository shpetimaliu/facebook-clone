const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_REFRESH, CLIENT_ID, CLIENT_SECRET } = process.env;

const auth = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  MAILING_REFRESH,
  EMAIL,
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const smtp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAUTH2",
      user: EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Facebook Clone email verification",
    html: `<div class="container"> <style type="text/css"> body { font-family: Arial, sans-serif; background-color: #f0f5ff; margin: 0; padding: 0; } .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); } .header { text-align: center; margin-bottom: 20px; } .header h1 { font-size: 32px; color: #0073e6; margin: 0; } .content { padding: 20px; background-color: #e6f7ff; border-radius: 10px; } .content p { font-size: 18px; line-height: 1.6; margin-bottom: 15px; color: #333; } .cta-button { display: inline-block; padding: 12px 24px; background-color: #0073e6; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: bold; transition: background-color 0.3s ease; } .cta-button:hover { background-color: #005bb5; } .reference-code { display: inline-block; padding: 8px 12px; background-color: #99bfff; border-radius: 8px; font-size: 14px; color: #444; } .footer { margin-top: 20px; text-align: center; font-size: 14px; color: #777; line-height: 1.5; } .footer a { color: #0073e6; text-decoration: none; } </style> <div class="header"> <h1 style="text-align: left"> <span style="font-size: 26px" >Verify your email for Facebook Clone created by Shpetim Aliu</span > </h1> </div> <div class="content"> <p>Dear <strong>Shpetim</strong>,</p> <p> You recently created an account on Facebook Clone by Shpetim Aliu. To complete your registration, please confirm your account. </p> <a class="cta-button" href="${url}" target="_blank" >Confirm your account</a > </div> <div class="footer"> This message has been sent to <a href="mailto:${email}" ><span style="color: #0073e6">${email}</span></a > based on your communication preferences. </div> </div>`,
  };
  smtp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
