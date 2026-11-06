const campo = document.querySelector("#tarefa");                          // seleção
const botao = document.querySelector("#adicionar");                       // seleção
const lista = document.querySelector("#lista");                           // seleção

botao.addEventListener("click", function () {                             // evento
    if (campo.value.trim() === "") return;
    const item = document.createElement("li");
    item.textContent = campo.value;

    // Desafio: um clique marca/desmarca como concluída
    item.addEventListener("click", function () {                          // evento
        item.classList.toggle("concluida");                               // alteração
    });

    // Desafio: só o duplo clique remove a tarefa
    item.addEventListener("dblclick", function () {                       // evento
        item.remove();                                                    // alteração
    });

    lista.append(item);                                                   // alteração
    campo.value = "";
    campo.focus();
});
