function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        // BOM DIA!
        img.src ='fotomanhã.png'
        document.body.style.background = '#fed091'
    } else if (hora >= 12 && hora <= 18) {
        // B0A TARDE!
        img.src ='fototarde.png'
        document.body.style.background = '#df8f5a'
    } else {
        img.src ='fotonoite.png'
        document.body.style.background = '#172c4a'
        // BOA NOITE!
    }
}
