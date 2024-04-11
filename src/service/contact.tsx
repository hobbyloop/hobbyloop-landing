export async function sendContactEmail(email) {
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
