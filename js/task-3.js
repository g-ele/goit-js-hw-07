// 1. Знаходимо в DOM інпут та спан для виведення імені
const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

// 2. Додаємо слухач події 'input' на поле введення
nameInput.addEventListener('input', (event) => {
  // 3. Отримуємо значення з інпуту та очищаємо його від пробілів по краях
  const trimmedValue = event.target.value.trim();

  // 4. Перевіряємо, чи інпут порожній
  if (trimmedValue === '') {
    // Якщо порожній або там лише пробіли — повертаємо "Anonymous"
    nameOutput.textContent = 'Anonymous';
  } else {
    // Якщо текст є — підставляємо очищене значення
    nameOutput.textContent = trimmedValue;
  }
});