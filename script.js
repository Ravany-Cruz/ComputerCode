
document.addEventListener('DOMContentLoaded', () => {
  const abrirContato = document.getElementById('abrirFormularioContato');
  const fecharFormulario = document.getElementById('fecharFormulario');
  const formContainer = document.getElementById('formContainer');
  const form = document.getElementById('formContato');
  const mensagemSucesso = document.getElementById('mensagemSucesso');

  if (abrirContato && fecharFormulario && formContainer && form && mensagemSucesso) {
    abrirContato.addEventListener('click', () => {
      formContainer.style.display = 'flex';
    });

    fecharFormulario.addEventListener('click', () => {
      formContainer.style.display = 'none';
      mensagemSucesso.style.display = 'none';
      mensagemSucesso.style.opacity = 0;
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      mensagemSucesso.style.display = 'block';
      void mensagemSucesso.offsetWidth;
      mensagemSucesso.style.opacity = 1;
      form.reset();

      setTimeout(() => {
        mensagemSucesso.style.opacity = 0;
      }, 2500);

      setTimeout(() => {
        mensagemSucesso.style.display = 'none';
        formContainer.style.display = 'none';
      }, 3000);
    });
  } else {
    console.error("Algum elemento do formulário não foi encontrado.");
  }

  document.getElementById('zoomImg').addEventListener('mouseenter', function() {
    this.style.transform = "scale(1.2)";
  });
  
  document.getElementById('zoomImg').addEventListener('mouseleave', function() {
    this.style.transform = "scale(1)";
  });
  
});
