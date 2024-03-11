const form = document.getElementById('formulario');

function validar(a, b) {
    if ((a < b) || (b > a)) {
        return true
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const mensagemSucesso = `O numero ${numero2.value} e maior que o numero ${numero1.value}`;
    const mensagemErro = `O numero ${numero1.value} e maior que o numero ${numero2.value}. O primeiro numero precisa ser menor que o segundo.`;

    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemErro = document.querySelector('.error-message');
  

    formEValido = validar(numero1.value, numero2.value)
    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';

        numero1.value = '';
        numero2.value = '';
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

        numero1.value = '';
        numero2.value = '';
    }
})