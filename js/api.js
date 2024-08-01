export async function pegarTarefasDaApi(){
    const resposta = await fetch('http://localhost:3000/tarefas') // fetch = buscar
    const dadosConvertidosPegarTarefa  = await resposta.json(resposta)
    //console.log(dadosConvertidosPegarTarefa)
    return dadosConvertidosPegarTarefa;
}

/* // exemplo de try / catch
try {
    const response = await fetch('https://api.example.com/data');
    } catch (error) {         
    console.error('Error:', error); }
*/

export async function postarTarefaNaApi(tituloTarefa, descricaoTarefa, prioridadeTarefa, dataTarefa, checkboxSelecionados){
    const resposta = await fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo:tituloTarefa,  
            descricao: descricaoTarefa,
            prioridade: prioridadeTarefa,
            data: dataTarefa,
            responsavel: checkboxSelecionados
        })
    });
    
    const dadosConvertidosPostarTarefa = await resposta.JSON();
    return dadosConvertidosPostarTarefa;
}


export async function deletarTarefaDaApi(id){
    const resposta =  await fetch(`http://localhost:3000/tarefas/${id}`, {
        method: 'DELETE', 
        headers:{
            'Content-type': 'application/json'
        }
    });

    const dadosConvertidosDeletarTarefa = await resposta.JSON();
    return dadosConvertidosDeletarTarefa;



}