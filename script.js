document.addEventListener('DOMContentLoaded', function() {
  // Código para el formulario de contacto
  document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;

    if (name && email && message) {
      alert('Mensaje enviado. ¡Gracias por contactarnos!');
      document.getElementById('contactForm').reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });

  // Código para el carrusel
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
  }

  setInterval(showNextItem, 4000);

  // Interacción para botones de filtrado de productos
  window.filterProducts = function(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      product.style.display = category === 'all' || product.getAttribute('data-category') === category ? 'block' : 'none';
    });
  };

  // Mostrar información del producto
  window.showProductInfo = function(title, description) {
    alert(`Producto: ${title}\nDescripción: ${description}`);
  };
});
