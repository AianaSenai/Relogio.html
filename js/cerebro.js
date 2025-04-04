const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const mensagem = document.querySelector('#mensagem')
const corpo = document.querySelector('body')


setInterval(relogio,1000)

function relogio(){
    let agora = new Date()

    h = agora.getHours()
    min = agora.getMinutes()
    s = agora.getSeconds()
    d = agora.getDate()
    m = agora.getMonth() +1
    a = agora.getFullYear() // fullYear ele vai dar o ano completo


    if(h<10){
        h = "0"+ h
    }
    if(min<10){
        min= "0"+ min
    }
    if(s<10){
        s= "0"+ s
    }
    if(d<10){
        d= "0"+ d
    }
    if(m<10){
        m= "0"+ m
    }
    if(h>=5 && h<12){
        mensagem.textContent= 'Bom dia!'
        corpo.className ='dia'
    } else if(h>=12 && h<18){
        mensagem.textContent = 'Boa tarde!'
    } else {
        mensagem.textContent = 'Boa noite'
        corpo.className ='noite'
    }

    horas.textContent = h
    minutos.textContent = min
    segundos.textContent = s
    dia.textContent = d
    mes.textContent = m
    ano.textContent = a
}