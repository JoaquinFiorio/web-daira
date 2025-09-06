document.addEventListener('DOMContentLoaded', () => {
  const requestButton = document.querySelector('.request-button');
  
  if (requestButton) {
    requestButton.addEventListener('click', () => {
      alert('¡Acceso solicitado!');
      // Aquí podrías añadir un código más complejo, como abrir un modal o navegar a otra página.
    });
  }
});