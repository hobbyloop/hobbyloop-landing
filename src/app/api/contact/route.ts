//sendContactEmail로 form을 보내면 POST함수 호출
// 클라이언트에서 요청을 해주는 건 sendContactEmail임 여기서 요청을 하면 POST함수에서는 받아서 서버에서 실행되는거임 즉 POST함수는 서버에서 실행되는 것.

import { sendEmail } from "@/service/email";

// 그래서 서버에서 사용할수있는 nodemailer를 사용할수 있는 것
export async function POST(req: Request) {
  const body = await req.json();
  //   const { representative, companyName, buisnessman, phone, email, message } =
  //     req.body;
  return sendEmail(body)
    .then(() => {
      return new Response(
        JSON.stringify({ message: "메일을 성공적으로 보냄" }),
        {
          status: 200,
        }
      );
    })
    .catch((err) => {
      return new Response(JSON.stringify({ message: "메세지 전송 실패" }), {
        status: 500,
      });
    });
}
