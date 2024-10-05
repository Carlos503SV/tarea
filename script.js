// Animación al hacer scroll: los elementos aparecen suavemente al entrar en la pantalla
function mostrarElementosConScroll() {
  const elementos = document.querySelectorAll('.ocultar');

  elementos.forEach(elemento => {
    const posicionElemento = elemento.getBoundingClientRect().top;
    const alturaVentana = window.innerHeight;

    if (posicionElemento < alturaVentana) {
      elemento.classList.add('mostrar');
    }
  });
}

window.addEventListener('scroll', mostrarElementosConScroll);

// Efecto hover en las imágenes de los proyectos (ya incluido en el CSS)

// Validación básica del formulario de contacto
const formulario = document.querySelector('#contacto form');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, completa todos los campos.');
  } else {
    alert('¡Gracias por tu mensaje!');
    formulario.reset(); // Limpia el formulario
  }
});

// Activar la clase "active" en el enlace de navegación actual
const enlacesNav = document.querySelectorAll('nav a');

enlacesNav.forEach(enlace => {
  enlace.addEventListener('click', () => {
    // Remover la clase "active" de todos los enlaces
    enlacesNav.forEach(enlace => enlace.classList.remove('active'));
    // Agregar la clase "active" al enlace actual
    enlace.classList.add('active');
  });
});
