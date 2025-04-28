
// BOTON para moverse a la seccion

document.getElementById('programar').addEventListener('click', function () {
    document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
  });
  
document.getElementById('ilustrar').addEventListener('click', function () {
    document.getElementById('ilustraciones').scrollIntoView({ behavior: 'smooth' });
  });

// 




// Seleccionamos todas las secciones
const secciones = document.querySelectorAll('section');

// Función para manejar la intersección con opacidad dinámica triplicada
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const porcentajeVisible = entry.intersectionRatio; // Proporción visible (0 a 1)

    if (porcentajeVisible > 0) {
      // Calculamos la opacidad como el triple del porcentaje visible (máximo de 1)
      const opacidad = Math.min(1, porcentajeVisible * 3); 
      entry.target.style.opacity = opacidad; // Aplica la opacidad dinámica
      entry.target.style.transform = `translateY(${20 * (1 - porcentajeVisible)}px)`; // Movimiento dinámico
    } else {
      // Resetea al estado inicial cuando no es visible
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(20px)';
    }
  });
}, {
  threshold: Array.from({ length: 21 }, (_, i) => i / 20), // Genera valores del 0 al 1 en pasos de 0.05
});

// Observamos cada sección
secciones.forEach(seccion => observer.observe(seccion));




// Lluvia

const contenedorLluvia = document.querySelector('.lluvia');
const numeroDeGotas = 150; // Ajusta la cantidad para toda la página

for (let i = 0; i < numeroDeGotas; i++) {
  const gota = document.createElement('div');
  gota.classList.add('gota');

  // Posiciones aleatorias por todo el viewport
  gota.style.left = `${Math.random() * 95}vw`;
  gota.style.top = `${Math.random() * 100}vh`;

  // Variación en velocidad y tiempo
  gota.style.animationDuration = `${Math.random() * 3 + 3}s`;
  gota.style.animationDelay = `${Math.random()}s`;

  contenedorLluvia.appendChild(gota);
}
