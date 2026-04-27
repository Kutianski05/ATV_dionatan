const titulo = document.getElementById('titulo');
const botao = doucument.getElementById('botao');

botao.addEventListener('click', function(){
   
    if(titulo.innerText == "Outro texto"){
        titulo.innerText = "45";
    } else {
        titulo.innerText = "Outro texto";
    }
});
