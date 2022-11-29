"use strict"
const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur',(evento) => {
    validaDataNascimento(evento.target)

})

function validaDataNascimento(input) {
    const dataRecebida = new Date (input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior de 18 anos para se cadastrar.'
    }
    

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new date ()
    const dataMais18 = new Date (date.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual

}