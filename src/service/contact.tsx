import { FormProps } from "@/components/commons/Form";

export async function sendContactEmail(email: FormProps) {
  // api route에 이메일 전송을 위해서 요청 보내는 함수
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "❌");
  }

  return data;
}
