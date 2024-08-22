import {criarTarefas, gerarResponsaveis} from "./listaDeTarefas.js"
import {criarPrioridades, pegarDadosDoFormulario, limparFormulario } from "./formulario.js";
import { pegarTarefasDaApi } from "./api.js";


criarPrioridades()
criarTarefas()
gerarResponsaveis()
pegarTarefasDaApi()

document.querySelector('#formularioTarefas').addEventListener('submit', pegarDadosDoFormulario)
document.querySelector('#botaoLimpar').addEventListener('click', limparFormulario)
