import {criarTarefas, gerarResponsaveis} from "./listaDeTarefas.js"
import {criarPrioridades, pegarDadosDoFormulario, limparFormulario } from "./formulario.js";

criarPrioridades()
criarTarefas()
gerarResponsaveis()

document.querySelector('#formularioTarefas').addEventListener('submit', pegarDadosDoFormulario)
document.querySelector('#botaoLimpar').addEventListener('click', limparFormulario)
