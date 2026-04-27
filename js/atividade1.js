const titulo = document.getElementById('titulo');
const botao = doucument.getElementById("botao");

botao.addEventListener("click", function(){
    titulo.innerText = "Outro texto"

    if(titulo.innerText == "Outro texto"){
        titulo.innerText = "45"
    } else {
        titulo.innerText = "Outro texto"
    }
});
