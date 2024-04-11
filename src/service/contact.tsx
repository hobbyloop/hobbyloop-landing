export async function sendContactEmail(email) {
  // api route에 이메일 전송을 위해서 요청 보내는 함수
  const responsive = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await responsive.json();

  if (!responsive.ok) {
    throw new Error("에러에러에러에러에러");
  }

  return data;
}
