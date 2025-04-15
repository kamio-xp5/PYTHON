// Função para abrir e fechar o modal
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
  
  // Animação de scroll suave ao clicar nos links
  document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  