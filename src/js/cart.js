// Припустимо, що у нас є функція для отримання кількості продуктів у кошику
function getCartCount() {
    // Логіка для отримання кількості продуктів у кошику
    // Наприклад, читання з localStorage або з сервера
}

// Оновлення відображення кількості в кошику
function updateCartCount() {
    const count = getCartCount();
    document.getElementById('cart-count').textContent = count;
}

// Виклик функції при завантаженні сторінки
updateCartCount();