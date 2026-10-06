function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// 1. Знаходимо необхідні елементи в DOM
const bodyElement = document.body;
const changeColorBtn = document.querySelector('button.change-color');
const colorTextSpan = document.querySelector('span.color');

// 2. Додаємо слухач події 'click' на кнопку
changeColorBtn.addEventListener('click', () => {
  // 3. Генеруємо новий випадковий колір
  const randomColor = getRandomHexColor();

  // 4. Змінюємо колір фону <body> через інлайн-стиль
  bodyElement.style.backgroundColor = randomColor;

  // 5. Задаємо згенероване значення кольору текстовим вмістом для span.color
  colorTextSpan.textContent = randomColor;
});
