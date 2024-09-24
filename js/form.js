import {verificaNome} from './verificacoes.js';

let infoPaciente = document.querySelectorAll('[data-form]')
let btnEnviarInfoPaciente = document.querySelector('.formulario')

infoPaciente.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo))
})


function verificaCampo(campo) {
    let mensagem = campo.parentNode.querySelector('.mensagem-erro')

    if (campo.value === '') {
        mensagem.innerHTML = 'Por favor preencha este campo!'
        campo.style.border = '1px solid var(--cor-erros)'
    } else {
        mensagem.innerHTML = ''
        campo.style.border = '1px solid var(--cor-branca)'
    }

    if (campo.id === 'nome' && campo.value === '') {
        verificaNome(campo)
        mensagem.innerHTML = 'Por favor preencha este campo!'
        campo.style.border = '1px solid var(--cor-erros)'
    }

}

btnEnviarInfoPaciente.addEventListener('submit', (e)=> {
    let radios = document.querySelectorAll('.radio')
    let radioEscolhido
    radios.forEach((radio) => {
        if (radio.checked) {
           radioEscolhido = radio.value
        }
    })

    let pacienteData = {
        'nome': e.target.elements['nome'].value,
        'data-consulta': e.target.elements['data-consulta'].value,
        'tipo-consulta': radioEscolhido,
        'hora': e.target.elements['hora'].value,
        'obs': e.target.elements['obs'].value
    }
    localStorage.setItem('Paciente', JSON.stringify(pacienteData))
    console.log(radioEscolhido)
})



