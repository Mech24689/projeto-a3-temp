//Variaveis do sistema de login
btnPremium = document.querySelector('.premium')
btnConsulta = document.querySelector('.comum')
btnSair = document.querySelector('.sair')
key = 'tipo da conta'
tipo = localStorage.getItem(key)

//variaveis do siistema de mudança de titulo
titleSection1 = document.querySelector('#title-section1')
titles = ["Olá amigo.", "Seja bem-vindo.", "Aqui você pode encontrar a paz e tranquilidade.", "Aproveite nossos audios ZEN e diário gratuitamente."]
idtitles = 0

//Sistema de login
if(!localStorage.getItem(key)){
    localStorage.setItem(key, 'visitante')
    window.location.reload()
}


btnPremium.addEventListener('click', ()=>{
    localStorage.setItem(key, 'visitante')
    window.location.href = 'telaLogin.html'
})

btnConsulta.addEventListener('click', ()=>{
    window.location.href = 'telaConsultas.html'
})

btnSair.addEventListener('click', ()=>{
    localStorage.setItem(key, 'visitante')
    window.location.reload()
})

if(tipo == 'visitante'){
    btnPremium.style.display = 'block'
    btnConsulta.style.display = 'none'
    btnSair.style.display = 'none'
}

if(tipo == 'premium'){
    btnPremium.style.display = 'none'
    btnConsulta.style.display = 'block'
    btnSair.style.display = 'block'
}

//sistema de mudança de titulos
titleSection1.innerHTML = titles[idtitles]

setTimeout(()=>{
    titleSection1.style.opacity = '0'
},5000)

setInterval(()=>{
    if(idtitles == titles.length - 1){
        idtitles = 0
        titleSection1.style.opacity = '1'
        titleSection1.innerHTML = titles[idtitles]
        setTimeout(()=>{
            titleSection1.style.opacity = '0'
        },5000)
    }else{
        idtitles++
        titleSection1.style.opacity = '1'
        titleSection1.innerHTML = titles[idtitles]
        setTimeout(()=>{
            titleSection1.style.opacity = '0'
        },5000)
    }
},6000)