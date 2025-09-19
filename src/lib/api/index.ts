export async function sendTelegramContact(data: {
  name: string;
  email: string;
  message: string;
  website?: string;
}) {
  const res = await fetch(`/api/telegram-contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}
