export function pegarDadosDoFormulario(e){
    e.preventDefault()
    const tituloTarefa = document.querySelector('#tituloTarefaForm').value;
    const prioridadeTarefa = document.querySelector('#prioridadeTarefaForm').value;
    const dataTarefa = document.querySelector('#dataTarefaForm').value;
    const descricaoTarefa = document.querySelector('#descricaoTarefaForm').value;

    


    console.log(tituloTarefa , prioridadeTarefa , dataTarefa , descricaoTarefa)

}