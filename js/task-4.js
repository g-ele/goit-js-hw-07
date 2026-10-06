// 1. Знаходимо форму в DOM
const loginForm = document.querySelector('.login-form');

// 2. Додаємо слухач події submit
loginForm.addEventListener('submit', (event) => {
  // Скасовуємо перезавантаження сторінки
  event.preventDefault();

  // Використовуємо FormData для автоматичного збору полів за їхніми атрибутами name
  const formData = new FormData(event.currentTarget);
  const data = {};
  let hasEmptyField = false;

  // Перебираємо зібрані дані form-data
  formData.forEach((value, key) => {
    const trimmedValue = value.trim();
    
    // Перевіряємо, чи є порожні поля
    if (trimmedValue === '') {
      hasEmptyField = true;
    }
    
    // Формуємо об'єкт із ключами 'email' та 'password'
    data[key] = trimmedValue;
  });

  // Якщо хоча б одне поле порожнє — виводимо alert і зупиняємо код
  if (hasEmptyField) {
    alert('All form fields must be filled in');
    return;
  }

  // Виводимо об'єкт у консоль і очищаємо форму
  console.log(data);
  event.currentTarget.reset();
});
