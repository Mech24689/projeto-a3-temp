let btnVoltar = document.querySelector('.btn-voltar')
let textFilter = document.querySelector('#filter')
let areaCards = document.querySelector('#areaConsultas')

//informações dos médicos que será adicionadas nos cards
const medicos = 
[
    ['Dr. Rey', 'Psicologia', 'Manhã', 'https://uploads.metropoles.com/wp-content/uploads/2020/05/15171120/Dr.-Rey-2.jpg'],
    ['Dra. Victoria Johnson', 'Psiquiatria', 'Tarde', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'],
    ['Dr. Oliver Anderson', 'Terapia', 'Noite', 'https://img.freepik.com/fotos-gratis/vista-frontal-de-homem-bonito_23-2148780801.jpg'],
    ['Dra. Aline Roberts', 'Psicologia', 'Tarde', 'https://img.freepik.com/fotos-gratis/retrato-de-uma-linda-mulher-morena-rosto-sorridente_53876-137688.jpg'],
    ['Dra. Emily Wilson', 'Psiquiatria', 'Manhã', 'https://media.istockphoto.com/id/1278139568/pt/foto/studio-portrait-of-20-year-old-woman.jpg?s=612x612&w=0&k=20&c=NipIoQzg7TsYHdYdOsLkncvLKof7Xp8MQTuzMWD0ZOI='],
    ['Dr. House', 'Terapia Familiar', 'Manhã', 'https://sites.google.com/site/professoreduardolima/_/rsrc/1236132650574/series/house/360199-dr-house.jpg?height=315&width=420'],
    ['Dr. Joseph Clark', 'Psiquiatria', 'Tarde', 'https://st2.depositphotos.com/4431055/7495/i/600/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg'],
    ['Dra. Grey', 'Psicologia', 'Manhã', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvjpSJWmsIny_gfUAiNYvoopKafrYHFu8gUkaJJ0bHvXEoldAOCvbD_nEyCroMDkqxao&usqp=CAU'],
    ['Dr. Roberto Martins', 'Terapia', 'Noite', 'https://img.r7.com/images/dr-bacteria-29032020120732221?dimensions=460x305'],
    ['Dr. Eddie Murphy', 'Psicologia', 'Manhã', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPYX6Y6yMQO3tFHMPmFGtVzeT7-50uG7L89P2bKCVxzR7krHjBwelIoX4Kmyw_7fdBvo&usqp=CAU'],
    ['Dr. Daniel Martin', 'Terapia', 'Tarde', 'https://media.istockphoto.com/id/1090878494/pt/foto/close-up-portrait-of-young-smiling-handsome-man-in-blue-polo-shirt-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=TnFoCdhgw_ksGZTkVjyZDqbQk9NcMI4nrZ3MvN6il_s='],
    ['Dr. Clark Kent', 'Psicologia', 'Manhã', 'https://pbs.twimg.com/media/EdfBto6XkAA9cSB.jpg:large'],
    ['Dra. Lily Anderson', 'Psicologia', 'Tarde', ''],
    ['Dr. Sócrates', 'Psiquiatria', 'Manhã', 'https://s.glbimg.com/es/ge/f/300x230/2011/08/20/socrates-1979-medico-ae397.jpg'],
    ['Dr. Stephen Strange', 'Terapia', 'Noite', 'https://hips.hearstapps.com/hmg-prod/images/cumberbatch_179663904jpg.jpg'],
    ['Dra. Madison Johnson', 'Psicologia', 'Tarde', '']
  ];
  

//cria cards
for(let i = 0;i < medicos.length; i++){
    //criar cards
    let card = document.createElement('div')
    card.classList.add('cards')

    //elementos do card

      //criar img
    let img = document.createElement('img')
    img.setAttribute('src', medicos[i][3] == ''? 'img/img-medico.jpg': medicos[i][3])
    card.appendChild(img)

      //criar nome medico
      let NomeMedico = document.createElement('p')
      NomeMedico.classList.add('nomeMedico')
      NomeMedico.innerText = "Nome: " + medicos[i][0]
      card.appendChild(NomeMedico)

      //criar especialidade do medico
      let areaMedico = document.createElement('p')
      areaMedico.classList.add('areaMedico')
      areaMedico.innerText = "Especialidade: " + medicos[i][1]
      card.appendChild(areaMedico)

      //criar periodo da consulta
      let periodo = document.createElement('p')
      periodo.classList.add('horario')
      periodo.innerText = "Periodo: " + medicos[i][2]
      card.appendChild(periodo)

      //adiciona os cards na areaCards
      areaCards.appendChild(card)
}

let cards = document.querySelectorAll('.cards')

//função de voltar no botão
btnVoltar.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})

//sistema de filtragem
textFilter.addEventListener('input', ()=>{
    //for que pega um card por vez
    for(let card of cards){
        especialidade = card.querySelector('.areaMedico').innerText.toLowerCase()
        filter = textFilter.value.toLowerCase()
        
        if(filter == ''){
            card.style.display = 'flex'
        }else{
            if(!especialidade.includes(filter)){
                card.style.display = 'none'
            }else{
                card.style.display = 'flex'
            }
        }
    }
})


