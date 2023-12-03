let audio1 = new Audio('sound/Som de Fogueira(MP3_70K).mp3')
let audio2 = new Audio('sound/Nature sounds Meditation forest sounds of birds singing relaxation - 4 minutes(MP3_70K).mp3')

sounds = [audio1, audio2, audio1, audio2, audio1]

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btnVoltar = document.querySelector('#voltar')

let background = document.querySelector('.back')

fundo = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png',]
idSound = 0

sounds[idSound].play()
background.src = fundo[idSound]
btn1.style.opacity = '100'

sounds[idSound].addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

btnVoltar.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})

btn1.addEventListener('click', ()=>{
    btn1.style.opacity = '100'
    btn2.style.opacity = '50%'
    btn3.style.opacity = '50%'
    btn4.style.opacity = '50%'
    btn5.style.opacity = '50%'

    sounds[idSound].pause()
    idSound = 0
    sounds[idSound].currentTime = 0
    sounds[idSound].play() 
    background.src = fundo[idSound]

    sounds[idSound].addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
})

btn2.addEventListener('click', ()=>{
    btn1.style.opacity = '50%'
    btn2.style.opacity = '100'
    btn3.style.opacity = '50%'
    btn4.style.opacity = '50%'
    btn5.style.opacity = '50%'

    sounds[idSound].pause()
    idSound = 1
    sounds[idSound].currentTime = 0
    sounds[idSound].play() 
    background.src = fundo[idSound]

    sounds[idSound].addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
})

btn3.addEventListener('click', ()=>{
    btn1.style.opacity = '50%'
    btn2.style.opacity = '50%'
    btn3.style.opacity = '100'
    btn4.style.opacity = '50%'
    btn5.style.opacity = '50%'

    sounds[idSound].pause()
    idSound = 2
    sounds[idSound].currentTime = 0
    sounds[idSound].play() 
    background.src = fundo[idSound]

    sounds[idSound].addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
})

btn4.addEventListener('click', ()=>{
    btn1.style.opacity = '50%'
    btn2.style.opacity = '50%'
    btn3.style.opacity = '50%'
    btn4.style.opacity = '100'
    btn5.style.opacity = '50%'

    sounds[idSound].pause()
    idSound = 3
    sounds[idSound].currentTime = 0
    sounds[idSound].play() 
    background.src = fundo[idSound]

    sounds[idSound].addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
})

btn5.addEventListener('click', ()=>{
    btn1.style.opacity = '50%'
    btn2.style.opacity = '50%'
    btn3.style.opacity = '50%'
    btn4.style.opacity = '50%'
    btn5.style.opacity = '100'

    sounds[idSound].pause()
    idSound = 4
    sounds[idSound].currentTime = 0
    sounds[idSound].play() 
    background.src = fundo[idSound]

    sounds[idSound].addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
})
