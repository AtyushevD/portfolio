export const sendToTelegram = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  const text = `Новое сообщение от ${data.name} (${data.email}):\n\n${data.message}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${text}&parse_mode=HTML`,
      {
        method: 'GET'
      }
    );

    return response.ok;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    // console.error('Ошибка отправки:', error);
    return false;
  }
};