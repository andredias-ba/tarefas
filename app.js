import { TAREFAS } from './constantes.js';

criarTarefas()

const etiquetasPrioridades = document.querySelectorAll('.etiqueta__prioridade');

etiquetasPrioridades.forEach((prioridade) => {
    if(prioridade.textContent === "Baixa"){
        // add cor de fundo verde 
        prioridade.classList.add('etiqueta__baixa');
    } else  if(prioridade.textContent === "Média"){
        // add cor de fundo amarela
        prioridade.classList.add('etiqueta__media');
    } else if(prioridade.textContent.includes("Alta")){
        // add cor de fundo vermelha
        prioridade.classList.add('etiqueta__alta')
    } 
})
    


function criarTarefas(){
    const listaDeTarefas = document.getElementById('listaDeTarefas');

    TAREFAS.map((tarefa => {
        const li = document.createElement('li');
        li.classList = 'tarefa';
        li.innerHTML = `
            <div class="etiquetas">
                    <div class="etiqueta__prioridade">${tarefa.prioridade}</div>    
                    <div class="etiqueta">${tarefa.data}</div>    
                    ${tarefa.responsavel.map(resp => `<div class="etiqueta">${resp}</div>`).join('')}
                    <div class="etiqueta">${tarefa.responsavel}</div>    
            </div>
            <div class="descricao__tarefa">
                    <h2 class="descricao__tarefa--titulo">${tarefa.titulo}</h2>
                    <p>${tarefa.descricao}</p>
            </div>
        `
        listaDeTarefas.appendChild(li);
    }))
}
