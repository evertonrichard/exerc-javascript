function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 19
msg.innerHTML = `Agora são ${hora} Horas!`

if (hora >= 0 && hora < 12) {
    // Bomdia
    img.src = 'C:\Users\evert\OneDrive\Área de Trabalho\aula12\exerc-javascript\foto_manha.png'
} else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = 'C:\Users\evert\OneDrive\Área de Trabalho\aula12\exerc-javascript\foto_tarde.png'
} else {
    //Boa Noite
    img.src = 'C:\Users\evert\OneDrive\Área de Trabalho\aula12\exerc-javascript\foto_noite.png'
}

}