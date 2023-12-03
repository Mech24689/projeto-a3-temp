//pegando elementos da area do podcast
let audio = new Audio("sound/Podcast.m4a")
audio.autoplay = false

let play = document.querySelector("#play")
let pause = document.querySelector("#pause")
let restart = document.querySelector("#restart")

let temp = document.querySelector("#temporizador")
let inputRange = document.querySelector("#tempoMusic")
let tempFinal = document.querySelector("#temporizador-final")


play.addEventListener('click', ()=>{
    audio.play()
})

pause.addEventListener('click', ()=>{
    audio.pause()
})

restart.addEventListener('click', ()=>{
    audio.currentTime = 0
    console.log(formatDuration(Math.floor(audio.duration)))
})

//function que converte numero inteiro em tempo - tempFinal
function formatDurationTempFinal(duration) {
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);
    
    // Adiciona um zero à esquerda se necessário
    var formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
    var formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var formattedDuration = formattedMinutes + ":" + formattedSeconds;

    tempFinal.textContent = formattedDuration;
}

//function que converte numero inteiro em tempo - temp
function formatDurationTemp(duration) {
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);
    
    // Adiciona um zero à esquerda se necessário
    var formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
    var formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;
    
    return formattedMinutes + ":" + formattedSeconds;
  }
    
//adicionando o tempo total do podcast no "tempfinal"
audio.addEventListener("loadedmetadata", function() {
    formatDurationTempFinal(Math.floor(audio.duration));
    inputRange.setAttribute('max', Math.floor(audio.duration))
});

//adicionando tempo atual do audio no "temp"
audio.addEventListener("loadedmetadata", function() {
    setInterval(()=>{
        temp.textContent = formatDurationTemp(audio.currentTime)
        inputRange.value = audio.currentTime
    },1000)
})

//alterar tempo pelo range

inputRange.addEventListener('input', ()=>{
    audio.pause()
    audio.currentTime = inputRange.value
})

inputRange.addEventListener('change', ()=>{
    audio.play()
})

audio.addEventListener("ended", ()=>{
    audio.currentTime = 0
    inputRange.value = audio.currentTime
})