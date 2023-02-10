const form = document.getElementById('form-deposito');
const valorConta = document.getElementById('valor-conta');
const valorTransferencia = document.getElementById('valor-transferencia');

function transferirSaldo () {
    if (valorConta.value > valorTransferencia.value) return true;
    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemSucesso = `Valor transferido com sucesso`

    const formEValido = transferirSaldo()
    console.log(formEValido)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorConta.value = '';
        valorTransferencia.value = '';
        console.log('caiu aqui')
        return;
    }
    valorTransferencia.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
})

valorTransferencia.addEventListener('keyup', function(e) {
    const formEValido = transferirSaldo()
    if (formEValido) {
        valorTransferencia.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        return;
    }
    valorTransferencia.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
});