document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = true; // Simular si el usuario está logueado (cambiar a false para no logueado)

    // Opciones del menú
    const loginLink = document.getElementById('login');
    const registerLink = document.getElementById('register');
    const cartLink = document.getElementById('cart');
    const logoutLink = document.getElementById('logout');

    // Precios de los productos
    const prices = document.querySelectorAll('.price');

    // Productos
    const products = document.querySelectorAll('.product');
    
    // Barra de búsqueda
    const searchInput = document.getElementById('search-input');
    const productGrid = document.getElementById('product-grid');

    // Verificar si el usuario está logueado
    if (isLoggedIn) {
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        cartLink.style.display = 'block';
        logoutLink.style.display = 'block';

        prices.forEach(price => {
            price.style.display = 'inline';
        });

        products.forEach(product => {
            product.addEventListener('click', function() {
                const productId = this.getAttribute('data-product-id');
                window.location.href = `product-detail.html?product=${productId}`;
            });
        });
    } else {
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
        cartLink.style.display = 'none';
        logoutLink.style.display = 'none';

        products.forEach(product => {
            product.addEventListener('click', function() {
                alert("Por favor, inicie sesión para ver los detalles del producto.");
            });
        });
    }

    // Lógica de búsqueda
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        products.forEach(product => {
            const productName = product.getAttribute('data-product-name').toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
