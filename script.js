function EscondeVelho() {
    document.getElementById("img2").className = document.getElementById("img2").className.replace("exibir", "esconder");
    document.getElementById("img1").className = document.getElementById("img1").className.replace("esconder", "exibir");
    document.getElementById("legenda").innerHTML = "Se desejar, repita a operação!";
}

function MostraVelho() {
    document.getElementById("img2").className = document.getElementById("img2").className.replace("esconder", "exibir");
    document.getElementById("img1").className = document.getElementById("img1").className.replace("exibir", "esconder");
    document.getElementById("legenda").innerHTML = "Clique sobre os celulares e verifique!&rarr;";
}

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

var radio = document.querySelector('.manu_btn')
var cont = 1

document.getElementById('rad1').checked = true
setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}