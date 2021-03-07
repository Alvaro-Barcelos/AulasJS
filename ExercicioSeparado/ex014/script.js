function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (minutos < 10){
        minutos = "0" + minutos
    }
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12){
        img.src = "fotomanha.jpg"
        document.body.style.background = 'burlywood'
    }
    else if(hora >= 12 && hora < 18){
        img.src = "fototarde.jpg"
        document.body.style.background = 'orangered'
    }
    else{ 
        img.src = "fotonoite.jpg"
        document.body.style.background = 'dimgrey'

    }
        
}
