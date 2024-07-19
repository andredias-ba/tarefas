import {criarTarefas} from "./listaDeTarefas.js"
import {criarPrioridades, pegarDadosDoFormulario } from "./formulario.js";

criarTarefas();

document.querySelector('#formularioTarefas').addEventListener('submit', pegarDadosDoFormulario)
document.querySelector('#botaoLimpar').addEventListener('click', limparFormulario)
