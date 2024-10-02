const Tarefa  = require('../models/tarefaModel');

// obter todas as tarefas
exports.getTodasTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefas', detalhes: error.message });
  }
};

// criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const tarefa = new Tarefa(req.body);
  try {
    await tarefa.save();
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar tarefa', detalhes: error.message });
  }
};

// obter uma tarefa pelo ID
exports.getTarefaPorId = async (req, res) => {
  try {
    const tarefa = await Tarefa.findById(req.params.id);
    if (!tarefa){ 
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefa', detalhes: error.message });
  }
};

// atualizar uma tarefa pelo ID
exports.updateTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tarefa){
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar tarefa', detalhes: error.message });
  }
};

// deletar uma tarefa pelo ID
exports.deletarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);

    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.json({ message: 'Tarefa deletada com sucesso!' });

  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar tarefa', detalhes: error.message });
  }
};