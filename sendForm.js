const sendMail = require("./sendMail");
const sendForm = async (req, res) => {
  const { body } = req;

  const verifyEmail = {
    from: "ETAJERKI",
    to: "book1cases@gmail.com",
    subject: "Новый клиент оставил в модалке свои данные!",
    text: ` 
    Имя: ${body.name}
    Номер телефона: ${body.phone}
    Email: ${body.email}
    Сообщение: ${body.message}
    `,
  };
  await sendMail(verifyEmail);
  res.status(200).json(verifyEmail);
};
module.exports = sendForm;
