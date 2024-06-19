export const createPhone = () => {
  let result = "";
  for (let i = 0; i < 10; i++) {
    // Генерация случайного числа от 0 до 9
    const randomNumber = Math.floor(Math.random() * 10);
    // Добавление числа в строку
    result += randomNumber.toString();
  }
  return result;
};
