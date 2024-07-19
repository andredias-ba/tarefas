import { PRIORIDADES, TAREFAS } from "./constantes.js";
import { criarTarefas } from "./listaDeTarefas.js";


export function criarPrioridades() {
    const prioridadeSelect = document.getElementById('prioridadeTarefaForm')
 
    PRIORIDADES.forEach(prioridade => {
        const optionElemento = document.createElement('option')
        optionElemento.value = prioridade
        optionElemento.textContent = prioridade
 
        prioridadeSelect.appendChild(optionElemento)
    });
}



export function pegarDadosDoFormulario(e){
    e.preventDefault()
    const tituloTarefa = document.querySelector('#tituloTarefaForm').value;
    const prioridadeTarefa = document.querySelector('#prioridadeTarefaForm').value;
    const dataTarefa = formatarData(document.querySelector('#dataTarefaForm').value);
    const descricaoTarefa = document.querySelector('#descricaoTarefaForm').value;

    // querySelectorAll('.classe') -> para o checkbox
    const checboxes = document.querySelectorAll('[data-responsavel]')
    const checkboxSelecionados = [];

    checboxes.forEach(checkbox => {
        if(checkbox.checked){
            const labelCheckbockbox = document.querySelector(`label[for=${checkbox.id}]`).textContent
            checkboxSelecionados.push(labelCheckbockbox);
        }
    })

const novaTarefa = {
    titulo: tituloTarefa,
    descricao: descricaoTarefa,
    prioridade: prioridadeTarefa,
    data: dataTarefa,
    responsavel: checkboxSelecionados,
}

TAREFAS.push(novaTarefa);
document.getElementById('listaDeTarefas').innerHTML = '';
criarTarefas();

   // console.log(tituloTarefa , prioridadeTarefa , dataTarefa , descricaoTarefa, checkboxSelecionados)
}

function formatarData(data){
    const[ano, mes, dia]= data.split('-')

    return `${dia}/${mes}/${ano}`

}


export function limparFormulario(){
    const tituloTarefa = document.querySelector('#tituloTarefaForm').value;
    const prioridadeTarefa = document.querySelector('#prioridadeTarefaForm').value;
    const dataTarefa = document.querySelector('#dataTarefaForm').value;
    const descricaoTarefa = document.querySelector('#descricaoTarefaForm').value;

    tituloTarefa.value = '';
    prioridadeTarefa.value = 'Alta';
    dataTarefa.value = '';
    descricaoTarefa.value ='';

}