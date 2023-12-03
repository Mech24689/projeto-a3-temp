//Armazenando elementos da tela em variaveis
btnAcessar = document.querySelector('.acessar')
inputLogin = document.querySelector('#login')
inputSenha = document.querySelector('#password')
titleLogin = document.querySelector('.titleLogin')
titleSenha = document.querySelector('.titleSenha')

//Variavel que vai servir como nome de local de armazenamento no LocalStorage
key = 'tipo da conta'

//Pega o valor que está armazenado no localStorage
tipo = localStorage.getItem(key)

//Evento que altera a borda do titulo do input login quando ele estiver em "focus"
inputLogin.addEventListener('focus', ()=>{
    titleLogin.style.boxShadow = '0 0 10px 3px black, inset 0 0 10px 3px black'
    titleSenha.style.boxShadow = 'none'
    })

//Evento que altera a borda do titulo do input senha quando ele estiver em "focus"
inputSenha.addEventListener('focus', ()=>{
    titleSenha.style.boxShadow = '0 0 10px 3px black, inset 0 0 10px 3px black'
    titleLogin.style.boxShadow = 'none'
    })

//Evento que faz a validação da senha, e se estiver correto voltar para a tela inicial(index.html)
btnAcessar.addEventListener('click', ()=>{
        if (inputLogin.value == 'admin' && inputSenha.value == 'admin'){
            //Altera o valor do localStorage para premium, pra que o usuario tenha acesso a outras partes do site
            localStorage.setItem(key, 'premium')
            window.location.href = 'index.html'
        }else{
            alert('Login ou Senha incorreta!')
        }
})