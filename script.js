// script.js

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


// Efecto hover en las imágenes de los proyectos
const imagenesProyectos = document.querySelectorAll('.proyecto img');

imagenesProyectos.forEach(imagen => {
  imagen.addEventListener('mouseover', () => {
    imagen.style.transform = 'scale(1.1)'; // Aumenta el tamaño al pasar el ratón
  });

  imagen.addEventListener('mouseout', () => {
    imagen.style.transform = 'scale(1.0)'; // Vuelve al tamaño original
  });
});

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
