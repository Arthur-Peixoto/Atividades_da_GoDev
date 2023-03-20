'use strict';

const criarItem = (tarefa) =>{
    const Item = document.createElement('label');
    Item.classList.add('todoitem');
    Item.innerHTML = `
    <input type="button" value="X" id="botao-${tarefa}">
    <div>${tarefa}</div>
    <input type="checkbox">
    ` 
    document.getElementById('todolist').appendChild(Item); 
}

const inserirItem = (evento) =>{
    const tecla = evento.key;
    const texto = evento.target.value;
        if(texto.length > 0 && tecla === "Enter"){
        criarItem(texto);
        evento.target.value = '';
        }
}

const clickItem = (evento) => {
    const elemento = evento.target;
    const id = elemento.id;
    if (elemento.type === "button") {
        document.getElementById('id').remove('todoitem');    
    }
}

document.getElementById('adicionarTarefa').addEventListener('keypress', inserirItem);
document.getElementById('todolist').addEventListener('click',clickItem);
