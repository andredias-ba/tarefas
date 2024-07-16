import { TAREFAS } from './constantes.js';

//criarTarefas()

    
export function criarTarefas(){
  
    const listaDeTarefas = document.getElementById('listaDeTarefas');

    ordenarListadeTarefasPorData()
    ordenarListaDeTarefasPorPrioridade()

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
        alterarCorEtiquetasPrioridades();
    }))
}

function alterarCorEtiquetasPrioridades(){
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
}



function ordenarListaDeTarefasPorPrioridade(){
    const prioridadeMapeamento = {
        Alta:  1,
        Média: 2,
        Baixa: 3
    }
    
    TAREFAS.sort((a, b) => {
        return prioridadeMapeamento[a.prioridade] - prioridadeMapeamento[b.prioridade]
    })
}

function ordenarListadeTarefasPorData(){
    TAREFAS.sort((a,b) => {
    return converterData(a.data) - converterData(b.data);
    })
} // fim ordenar por data


function converterData(data){
    const[dia, mes, ano] = data.split('/').map(Number)
    
    const dataConvertida = new Date(ano, mes-1, dia )
  //  console.log(dataConvertida);
    return dataConvertida;

}