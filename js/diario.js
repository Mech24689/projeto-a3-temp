let btnVoltar = document.querySelector('#voltar')
let btnSalvar = document.querySelector('#salvar')
let textArea = document.querySelector('#areaText')

//Evento pra voltar para a tela inicial(index.html)
btnVoltar.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})

btnSalvar.addEventListener('click', ()=>{
    textArea.value = ''
    setTimeout(()=>{
        alert('Página salvo com sucesso!')
    },1000)
})