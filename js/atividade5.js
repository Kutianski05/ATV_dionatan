// ATIVIDADE 5 (base da atividade 3)
// ==============================

// PARTE 1 — Criar função para adicionar tarefas
// → função responsável por criar o <li>
// → reutilizar código da atividade 3

// PARTE 2 — Evento do botão "Adicionar"
// → usar addEventListener
// → pegar valor do input
// → chamar função que cria o <li>
// → limpar o input

// PARTE 3 — Salvar dados no localStorage
// → criar função salvar()
// → percorrer todos os <li>
// → pegar o texto de cada item
// → guardar em uma lista (array)
// → transformar em JSON (JSON.stringify)
// → salvar no localStorage

// PARTE 4 — Carregar dados ao abrir a página
// → usar: document.addEventListener("DOMContentLoaded")
// → buscar dados do localStorage
// → transformar JSON em lista (JSON.parse)
// → recriar os <li> na tela

// PARTE 5 — Atualizar sempre que mudar
// → chamar salvar() ao:
//    - adicionar item
//    - Carregar a página

const botao = document.getElementById("botao");
const input = document.getElementById("texto");
const lista = document.getElementById("lista");


botao.addEventListener('click', function(){
    
    const texto = input.value;
    
    const item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";

    btnRemover.addEventListener("click" , function(){
        lista.removeChild(item);
    });

    item.appendChild(btnRemover);

});