import {criarTarefas} from "../listaDeTarefas.js"
import { pegarDadosDoFormulario } from "./formulario.js";

criarTarefas();

document.querySelector('#formularioTarefas').addEventListener('submit', pegarDadosDoFormulario)