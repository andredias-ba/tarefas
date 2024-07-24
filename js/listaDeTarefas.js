//import { TAREFAS, RESPONSAVEIS } from './constantes.js';
import { RESPONSAVEIS } from './constantes.js';

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

            <div>
            <button> 
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.704 0H9.296C3.472 0 0 3.472 0 9.296V22.688C0 28.528 3.472 32 9.296 32H22.688C28.512 32 31.984 28.528 31.984 22.704V9.296C32 3.472 28.528 0 22.704 0Z" fill="#CF3F3F"/>
                <g clip-path="url(#clip0_440_219)">
                <path d="M9.32568 11.8335H22.659" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.3257 15.1665V20.1665" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.6587 15.1665V20.1665" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.1587 11.8335L10.992 21.8335C10.992 22.2755 11.1676 22.6994 11.4802 23.012C11.7927 23.3246 12.2167 23.5002 12.6587 23.5002H19.3254C19.7674 23.5002 20.1913 23.3246 20.5039 23.012C20.8164 22.6994 20.992 22.2755 20.992 21.8335L21.8254 11.8335" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.4922 11.8333V9.33333C13.4922 9.11232 13.58 8.90036 13.7363 8.74408C13.8925 8.5878 14.1045 8.5 14.3255 8.5H17.6589C17.8799 8.5 18.0918 8.5878 18.2481 8.74408C18.4044 8.90036 18.4922 9.11232 18.4922 9.33333V11.8333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_440_219">
                <rect width="20" height="20" fill="white" transform="translate(5.99219 6)"/>
                </clipPath>
                </defs>
                </svg>              
            </button>
            </div>
			<div class="container__tarefa--descricao">
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