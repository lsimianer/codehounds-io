
var api_key = process.env.REACT_APP_MAILGUN_API_KEY;
var domain = process.env.REACT_APP_MAILGUN_DOMAIN_KEY;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  
  class MailgunMailer {
    constructor({ subject }, content) {
        this.data = {
          from: "no-reply@testitout.com",
          to: 'lsimianer@codehounds.io',
          subject: subject,
          html: content
        };
      }

      async send() {
        const resp = await mailgun.messages().send(this.data);
        return resp;
      }
  }
  
  module.exports = MailgunMailer