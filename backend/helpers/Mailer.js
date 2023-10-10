const nodemailer = require("nodemailer");
const { google } = require("googleapi");

const { OAuth2 } = google.auth;

const { EMAIL, MAILING_REFRESH, CLIENT_ID, CLIENT_SECRET } = process.env;
