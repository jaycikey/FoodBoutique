document.getElementById('product-filter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Отримання даних з форми
    const keyword = document.getElementById('keyword-input').value;
    const category = document.getElementById('category-select').value;

    // Збереження у локальне сховище
    localStorage.setItem('filters', JSON.stringify({ keyword, category, page: 1, limit: 6 }));

    // Відправка запиту на сервер для отримання продуктів
    fetchProducts(keyword, category);
});

function fetchProducts(keyword, category) {
    // Логіка для відправки запиту на сервер з використанням keyword та category
    // Отримані продукти відображаються у ProductsList
}

// Ініціалізація фільтрів з локального сховища при завантаженні сторінки
function initializeFilters() {
    const savedFilters = JSON.parse(localStorage.getItem('filters')) || { keyword: null, category: null, page: 1, limit: 6 };
    
    if (savedFilters.keyword) {
        document.getElementById('keyword-input').value = savedFilters.keyword;
    }
    if (savedFilters.category) {
        document.getElementById('category-select').value = savedFilters.category;
    }

    // Можливо, відправити запит на сервер для отримання продуктів з урахуванням збережених фільтрів
}

window.onload = initializeFilters;