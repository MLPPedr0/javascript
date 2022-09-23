function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){//verifica se digitou o ano certo
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {//Criança
                img.setAttribute('src', 'menino.jpg')
                img.width = 350;
                img.height = 500;
            } else if (idade < 25) {//Jovem
                img.setAttribute('src', 'jovemh.jpg')
                img.width = 350;
                img.height = 480;
            } else if (idade < 50) {//adulto
                img.setAttribute('src', 'homem.jpg')
                img.width = 350;
                img.height = 420;
            } else { //idoso
                img.setAttribute('src', 'idoso.jpg')
                img.width = 350;
                img.height = 500;
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {//Criança
                img.setAttribute('src', 'menina.jpg')
                img.width = 350;
                img.height = 500;
            } else if (idade < 25) {//Jovem
                img.setAttribute('src', 'jovemm.jpg')
                img.width = 350;
                img.height = 480;
            } else if (idade < 50) {//adulto
                img.setAttribute('src', 'mulher.jpg')
                img.width = 350;
                img.height = 500;
            } else { //idoso
                img.setAttribute('src', 'idosa.jpg')
                img.width = 400;
                img.height = 500;
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}