import { Form } from "@/components/commons/Form";
import nodemailer from "nodemailer";

// nodemailer 사용
export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({
  representative,
  companyName,
  buisnessman,
  phone,
  email,
  message,
}: Form) {
  const mailData = {
    to: process.env.AUTH_USER,
    representative,
    companyName,
    phone,
    email,
    message,
    html: `
        대표자명:${buisnessman}
        핸드폰번호:${phone}
    `,
  };
  // 전송
  return transporter.sendMail(mailData);
}
