const form = document.getElementById('adicionar-contato')
const informacoes = []

let linhas = ''


form.addEventListener('submit', function(e) {
    e.preventDefault();
    criarLinha()
    adicionarLinha()
})

function criarLinha() {
    const inputNome = document.getElementById('add-nome')
    const inputTel = document.getElementById('add-telefone')

    let linha = '<tr>'
    linha += `<td> ${inputNome.value} </td>`
    linha += `<td> ${inputTel.value} </td>`
    linha += `</tr>`

    linhas += linha

    console.log(inputNome.value , inputTel.value    )
    inputNome.value = ''
    inputTel.value = ''
        ;

}

function adicionarLinha () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

const exibirForm = document.getElementById('exibirForm')
exibirForm.addEventListener('click', function(){
    form.style.display='block'
})