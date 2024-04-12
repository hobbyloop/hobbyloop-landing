import { FormProps } from "@/components/commons/Form";
import nodemailer from "nodemailer";

// nodemailer 사용
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
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
}: FormProps) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `하비루프 문의하기 ${companyName}`,
    html: `
        <h3>대표자명 : ${representative}</h3>
        <h3>업체명 : ${companyName}</h3>
        <h3>사업자 등록번호 : ${buisnessman}</h3>
        <h3>핸드폰번호 : ${phone}</h3>
        <h3>이메일 주소 : ${email}</h3>
        <h3>문의내용 : ${message}</h3>
    `,
  };
  // 전송
  return transporter.sendMail(mailData);
}
