const etiquetasPrioridades = document.querySelectorAll('.etiqueta__prioridade');

etiquetasPrioridades.forEach(prioridade => {
    if(prioridade.textContent === "Baixa"){
        // add cor de fundo verde 
        prioridade.classList.add('etiqueta__baixa')
    } else  if(prioridade.textContent === "Média"){
        // add cor de fundo amarela
        prioridade.classList.add('etiqueta__media')
    } else if(prioridade.textContent === "Alta"){
        // add cor de fundo vermelha
        prioridade.classList.add('etiqueta__alta')
    } 
})
    
