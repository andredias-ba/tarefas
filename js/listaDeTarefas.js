//import { TAREFAS, RESPONSAVEIS, imagemDelete } from './constantes.js';
import { imagemDelete, RESPONSAVEIS } from './constantes.js';

//criarTarefas()


export function gerarResponsaveis(){
    const listaResp = document.querySelector('.container__checkbox')
    //console.log(listaResp)
    RESPONSAVEIS.map((resp => {
    //    console.log(resp.responsavel)
    //    console.log(resp.id)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="container__checkbox--item">
            <input type="checkbox" id=${resp.id} data-responsavel/>
            <label for=${resp.id}>${resp.responsavel}</label>
        </div> `
        listaResp.append(div);
    }))

} // gerarResponsaveis


export function criarTarefas(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))|| [];
    const listaDeTarefas = document.getElementById('listaDeTarefas');
    const deleteSvg = document.createElement('svg');
    deleteSvg.innerHTML = imagemDelete;
    const btDelete = document.createElement('button');
    btDelete.appendChild(deleteSvg);
    
    ordenarListadeTarefasPorData(tarefas)
    ordenarListaDeTarefasPorPrioridade(tarefas)

    
    // desafio => nao precisar zerar minha lista
    document.getElementById('listaDeTarefas').innerHTML = '';

    tarefas.map((tarefa => {
        const li = document.createElement('li');
        li.classList = 'container__tarefa';
        li.innerHTML = `
            <div class="tarefas__etiquetas">
				<div class="etiqueta__prioridade">${tarefa.prioridade}</div>
				<div class="etiqueta">${tarefa.data}</div>
				${tarefa.responsavel
          .map((resp) => `<div class="etiqueta">${resp}</div>`)
          .join('')}
			</div>
            
			<div class="container__tarefa--descricao">
				<h2 class="descricao__tarefa--titulo">${tarefa.titulo}</h2>
				<p>${tarefa.descricao}</p>
			</div>            
       
        <button class="tarefa__botao-deletar">
            <svg class="tarefa__botao-deletar__icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.32568 5.8335H16.659" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.32568 9.1665V14.1665" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.6587 9.1665V14.1665" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.15869 5.8335L4.99202 15.8335C4.99202 16.2755 5.16762 16.6994 5.48018 17.012C5.79274 17.3246 6.21666 17.5002 6.65869 17.5002H13.3254C13.7674 17.5002 14.1913 17.3246 14.5039 17.012C14.8164 16.6994 14.992 16.2755 14.992 15.8335L15.8254 5.8335" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.49219 5.83333V3.33333C7.49219 3.11232 7.57999 2.90036 7.73627 2.74408C7.89255 2.5878 8.10451 2.5 8.32552 2.5H11.6589C11.8799 2.5 12.0918 2.5878 12.2481 2.74408C12.4044 2.90036 12.4922 3.11232 12.4922 3.33333V5.83333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        `
        const deleteButton = li.querySelector('.tarefa__botao-deletar')
        deleteButton.addEventListener('click', () => deletarTarefa(tarefa.id))
            
        

        listaDeTarefas.appendChild(li);
        alterarCorEtiquetasPrioridades();
    }))
}

function deletarTarefa(id) {
  const tarefas =  JSON.parse(localStorage.getItem('tarefas')) || []
  const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id)
  localStorage.setItem('tarefas', JSON.stringify(tarefasFiltradas))
 
  criarTarefas()
}
 

function alterarCorEtiquetasPrioridades(){
    const etiquetasPrioridades = document.querySelectorAll('.etiqueta__prioridade');

    etiquetasPrioridades.forEach((prioridade) => {
        if (prioridade.textContent.includes('Baixa')) {
            prioridade.classList.add('etiqueta__prioridade--baixa')
          } else if (prioridade.textContent.includes('Média')) {
            prioridade.classList.add('etiqueta__prioridade--media')
          } else {
            prioridade.classList.add('etiqueta__prioridade--alta')
          }
})
}



function ordenarListaDeTarefasPorPrioridade(tarefas){
    const prioridadeMapeamento = {
        Alta:  1,
        Média: 2,
        Baixa: 3
    }
    
  //  TAREFAS.sort((a, b) => {
    tarefas.sort((a, b) => {
        return prioridadeMapeamento[a.prioridade] - prioridadeMapeamento[b.prioridade]
    })
}

function ordenarListadeTarefasPorData(tarefas){
   // TAREFAS.sort((a,b) => {
    tarefas.sort((a,b) => {
    return converterData(a.data) - converterData(b.data);
    })
} // fim ordenar por data


function converterData(data){
    const[dia, mes, ano] = data.split('/').map(Number)
    
    const dataConvertida = new Date(ano, mes-1, dia )
  //  console.log(dataConvertida);
    return dataConvertida;

}