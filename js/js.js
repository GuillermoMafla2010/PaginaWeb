var mensaje;


$(document).ready(function() {
    var botones = document.querySelectorAll("img")
    for (i = 0; i < botones.length; i++) {
        botones[i].addEventListener("onmouseover", desplegarimagen, false)
        console.log("Exito")
    }

    function desplegarimagen(e) {
        console.log(e.target)
    }
})

$('.preloader').fadeOut('slow');


function cerrar() {

    document.getElementById("menulateral").style.display = 'none';
    document.getElementById("menuon").style.display = 'block';

}

function abrirmenulateral() {
    document.getElementById("menulateral").style.display = 'block';
    document.getElementById("menuon").style.display = 'none';
}

function cambiar() {




    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => document.getElementById("ajax").innerHTML = json.title);

}



function ver() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
        .then(json => {
            for (i = 0; i < json.length; i++) {
                console.log(json[i].title)
                document.getElementById("post").innerHTML += "<p>" + json[i].title + "</p> <hr> <br>"
            }


        })

}