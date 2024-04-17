"use server"

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appTZJ01P3xFbELWf');

export async function sendMessage(formData) {
  const inquiry = {
    name: formData.get("name"),
    email: formData.get("email"),
    number: formData.get("number"),
    message: formData.get("message"),
  };
  console.log(inquiry);

  base('Inquiry').create({
  "Name": inquiry.name,
  "Email": inquiry.email,
  "Message":inquiry.message,
  "Mobile Number": inquiry.number
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});




}








