import { Endpoint } from "payload";

async function sendToTelegram(message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    throw new Error("Falta TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID en .env");
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  });
}

export const TelegramEdpoint: Endpoint = {
  path: "/telegram-contact",
  method: "post",
  handler: async (req: any) => {
    try {
      const body = await req.json();
      const { name, email, message, website } = body;

      if (website && website.length > 0) {
        return Response.json({ ok: true, msg: "Bot detectado (honeypot)" });
      }

      if (!name || !email || !message) {
        return Response.json({ error: "Faltan campos obligatorios" });
      }

      const text = [
        "<b>Nuevo contacto</b>",
        `👤 Nombre: ${name}`,
        `✉️ Email: ${email}`,
        "",
        `💬 Mensaje:`,
        message,
      ].join("\n");

      await sendToTelegram(text);

      return Response.json({ ok: true });
    } catch (err: any) {
      console.error("Telegram error:", err);
      return Response.json({ error: "Error interno" });
    }
  },
};
