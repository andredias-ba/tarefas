import s from './formulario.module.css'
import { PRIORIDADES } from '../../constantes/prioridades'
import { Select, Input, Responsaveis, Textarea } from '../index.js'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

// colocar as mensagens de erro de validação
// reset do form
// listar as tarefas na tela

export function Formulario() {
  const valoresIniciais ={
    titulo: '',
    prioridade: 'Selecione',
    data:'',
    descricao:'',
    responsaveis:[]
  }


  const validacoes = Yup.object({
    titulo: Yup.string().required('O título é obrigatório'),
    prioridade: Yup.string().oneOf(['Alta', 'Média', 'Baixa'], 'Selecione uma prioridade'),
    data: Yup.date().required('A data é obrigatória'),
    descricao: Yup.string().required('A descrição é obrigatória'),
    responsaveis: Yup.array().min(1, "Selecione pelo menos um responsável").max(3, 'Só podemos ter no máximo 3 responsáveis')
  })


  function pegarDadosFormulario(valores, {resetForm}){
      console.log(valores)
  }

  return (
    <Formik
      initialValues={valoresIniciais}
      validationSchema={validacoes}
      onSubmit={pegarDadosFormulario}
    >
      <Form className={s.formulario}>
        <div className={s.campos}>
          <Input 
            id="titulo" 
            rotulo="Título" 
            textoPlaceholder="Digite o rótulo da tarefa." 
            
          />
          <Select 
            id="prioridade" 
            rotulo="Prioridade"
            options={PRIORIDADES} 
          />
          <Input 
            id="data" 
            rotulo="Data" 
            tipo="date" 
          />
        </div>

        <div className={s.campos}>
          <Textarea 
            id="descricao"
            rotulo="Descrição"
            placeholder="Digite a descrição da tarefa"
          />
          <Responsaveis id="responsaveis" /> 
        </div>

        <div className={s.controles}>
          <button
            className={`${s.botao} ${s.botaolimpar}`}
            type='button'
            title='Limpar o formulário'
        >
          Limpar
        </button>
        <button
            className={`${s.botao} ${s.botaoAdicionar}`}
            type='submit'
            title='Adicionar Tarefa'
        >
          Adicionar
        </button>

        </div>

      </Form>
    </Formik>
  )
}



/*

export default Formulario

///////////////////////////////////////////////////////
import '../js/formulario.js'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
        <div class="conteudo-principal">
      <form id="formularioTarefas" class="formulario-tarefas">
        <div class="formulario-tarefas--linha-inteira">
          <div class="formulario-tarefas--linha-metade">
            <div class="formulario-tarefas--coluna">
              <label class="tituloTarefaForm">Título</label>
              <input
                id="tituloTarefaForm"
                placeholder="Ex.: Revisar código crítico"
                class="input--borda"
                required
                minlength="5"
                maxlength="30"
              />
            </div>
          </div>

          <div class="formulario-tarefas--linha-metade">
            <div class="formulario-tarefas--coluna">
              <label for="prioridadeTarefaForm">Prioridade</label>
              <select id="prioridadeTarefaForm" class="input--borda">
                  
              </select>
            </div>

            <div class="formulario-tarefas--coluna">
              <label for="dataTarefaForm">Data</label>
              <input type="date" id="dataTarefaForm" class="input--borda" />
              required
            </div>
          </div>
        </div>

        <div class="formulario-tarefas--linha-inteira">
          <div class="formulario-tarefas--coluna">
            <label for="descricaoTarefaForm">Descrição</label>
            <textarea
              id="descricaoTarefaForm"
              placeholder="Revisar bugs críticos no módulo principal."
              class="input-textarea input--borda"
              required
            ></textarea>
          </div>
          

          <div class="formulario-tarefas--coluna">
            <label for="responsavelTarefaForm">Responsável(is):</label>
            <div class="container__checkbox">
             
            </div> 
          </div>
        </div>

        <div class="formulario-tarefas--linha-inteira">
          <button class="formulario-tarefas__botao" type="button" id="botaoLimpar">Limpar</button>
          <button class="formulario-tarefas__botao" id="botaoAdicionar">
            Adicionar
          </button>
        </div>
      </form>
      </div>
        </section>

    )


}
*/
