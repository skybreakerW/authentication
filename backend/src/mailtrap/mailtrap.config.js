import { MailtrapClient } from "mailtrap";


const TOKEN = "ENTER API TOKEN HERE"

export const client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Akash",
};

