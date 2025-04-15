document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const carousel = document.querySelector('.carousel-inner');
    const prevControl = document.querySelector('.carousel-control-prev');
    const nextControl = document.querySelector('.carousel-control-next');
    let currentIndex = 0;
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (name && email && message) {
        feedback.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        feedback.classList.remove('hidden');
        form.reset();
      } else {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.classList.add('hidden');
      }
    });
  
    function updateCarousel() {
      const items = document.querySelectorAll('.carousel-item');
      items.forEach((item, index) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    }
  
    prevControl.addEventListener('click', function(event) {
      event.preventDefault();
      const items = document.querySelectorAll('.carousel-item');
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    });
  
    nextControl.addEventListener('click', function(event) {
      event.preventDefault();
      const items = document.querySelectorAll('.carousel-item');
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });
  });