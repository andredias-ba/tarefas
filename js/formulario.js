//  import { PRIORIDADES, TAREFAS, RESPONSAVEIS } from "./constantes.js";
import { PRIORIDADES, RESPONSAVEIS } from "./constantes.js";
import { criarTarefas } from "./listaDeTarefas.js";


export function criarPrioridades() {
    const prioridadeSelect = document.getElementById('prioridadeTarefaForm')
 
    PRIORIDADES.forEach(prioridade => {
        const optionElemento = document.createElement('option')
        optionElemento.value = prioridade
        optionElemento.textContent = prioridade
 
        prioridadeSelect.appendChild(optionElemento)
    })
}


export function pegarDadosDoFormulario(e){
    e.preventDefault()
    const tituloTarefa = document.querySelector('#tituloTarefaForm').value;
//    console.log(`T: ${tituloTarefa}`);
    const prioridadeTarefa = document.querySelector('#prioridadeTarefaForm').value;
//    console.log(`P: ${prioridadeTarefa}`);
    const dataTarefa = formatarData(document.querySelector('#dataTarefaForm').value);
    console.log(`Dt: ${dataTarefa}`);
    const descricaoTarefa = document.querySelector('#descricaoTarefaForm').value;
//    console.log(`Des: ${descricaoTarefa}`);
    // querySelectorAll('.classe') -> para o checkbox
    const checboxes = document.querySelectorAll('[data-responsavel]')
    const checkboxSelecionados = [];

    checboxes.forEach(checkbox => {
        if(checkbox.checked){
            const labelCheckbox = document.querySelector(`label[for=${checkbox.id}]`).textContent
            checkboxSelecionados.push(labelCheckbox);
        }
    })

    console.log(`qtd check: ${checkboxSelecionados.length}`)

    if (tituloTarefa != '' && prioridadeTarefa != '' && descricaoTarefa != '' && checkboxSelecionados.length != 0 && dataTarefa != "undefined/undefined/"){
        const novaTarefa = {
            titulo: tituloTarefa,
            descricao: descricaoTarefa,
            prioridade: prioridadeTarefa,
            data: dataTarefa,
            responsavel: checkboxSelecionados,
        }
            // na primeira vez nao tem nada depois na segunda ele vem no formato
        const tarefasAtualizadas = JSON.parse(localStorage.getItem('tarefas')) ||[]

        tarefasAtualizadas.push(novaTarefa)
        localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

       // TAREFAS.push(novaTarefa);
       
        //
        criarTarefas();
        limparFormulario();
    } else{
        alert("Dados do formulário incompletos!!");
    }

   // console.log(tituloTarefa , prioridadeTarefa , dataTarefa , descricaoTarefa, checkboxSelecionados)
} // fim pegarDadosDoFormulario

function formatarData(data){
    const[ano, mes, dia]= data.split('-')

    return `${dia}/${mes}/${ano}`

}


export function limparFormulario(){
    const tituloTarefa = document.querySelector('#tituloTarefaForm')
    const prioridadeTarefa = document.querySelector('#prioridadeTarefaForm')
    const dataTarefa = document.querySelector('#dataTarefaForm')
    const descricaoTarefa = document.querySelector('#descricaoTarefaForm')

    tituloTarefa.value = '';
    prioridadeTarefa.value = 'Alta';
    dataTarefa.value = '';
    descricaoTarefa.value ='';
    
    const checkResponsáveis = document.querySelectorAll('[data-responsavel]')

    checkResponsáveis.forEach(checkbox => {
        checkbox.checked = false;
    })
    
    //desafio -> limpar os checkboxes também!!
}

