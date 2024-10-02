const mongoose = require('mongoose');
const Task = require('../../../tarefas/models/tarefaModel');
const moment = require('moment-timezone');
const dotenv = require('dotenv');
dotenv.config();

describe('Tarefa Model', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });

  afterAll(async () => {
    await Task.deleteMany({});
    await mongoose.disconnect();
  });

  it('deve criar uma tarefa válida', async () => {
    const taskData = {
      titulo: 'Tarefa Teste',
      descricao: 'Descrição da tarefa teste',
      prioridade: 'Alta',
      data: moment().tz('America/Recife').add(1, 'days').toDate(),
      responsaveis: ['Responsável 1']
    };

    const task = new Task(taskData);
    const savedTask = await task.save();
    expect(savedTask._id).toBeDefined();
    expect(savedTask.titulo).toBe(taskData.titulo);
    expect(savedTask.prioridade).toBe(taskData.prioridade);
    expect(savedTask.data).toEqual(taskData.data);
    expect(savedTask.responsaveis).toEqual(taskData.responsaveis);
    expect(savedTask.status).toBe('Pendente');
  });

  it('não deve criar uma tarefa sem título', async () => {
    const taskData = {
      descricao: 'Descrição da tarefa teste',
      prioridade: 'Alta',
      data: moment().tz('America/Recife').add(1, 'days').toDate(),
      responsaveis: ['Responsável 1']
    };

    try {
      const task = new Task(taskData);
      await task.save();
    } catch (error) {
      expect(error.errors.titulo).toBeDefined();
    }
  });

  it('não deve criar uma tarefa com data no passado', async () => {
    const taskData = {
      titulo: 'Tarefa Teste',
      descricao: 'Descrição da tarefa teste',
      prioridade: 'Alta',
      data: moment().tz('America/Recife').subtract(1, 'days').toDate(),
      responsaveis: ['Responsável 1']
    };

    try {
      const task = new Task(taskData);
      await task.save();
    } catch (error) {
      expect(error.errors.data).toBeDefined();
    }
  });

  it('não deve criar uma tarefa sem responsáveis', async () => {
    const taskData = {
      titulo: 'Tarefa Teste',
      descricao: 'Descrição da tarefa teste',
      prioridade: 'Alta',
      data: moment().tz('America/Recife').add(1, 'days').toDate(),
      responsaveis: []
    };

    try {
      const task = new Task(taskData);
      await task.save();
    } catch (error) {
      expect(error.errors.responsaveis).toBeDefined();
    }
  });

  it('deve atualizar o campo "atualizadoEm" ao salvar a tarefa', async () => {
    const taskData = {
      titulo: 'Tarefa Teste',
      descricao: 'Descrição da tarefa teste',
      prioridade: 'Alta',
      data: moment().tz('America/Recife').add(1, 'days').toDate(),
      responsaveis: ['Responsável 1']
    };

    const task = new Task(taskData);
    await task.save();

    const initialUpdateTime = task.atualizadoEm;

    task.titulo = 'Tarefa Teste Atualizada';
    await task.save();

    expect(task.atualizadoEm).not.toEqual(initialUpdateTime);
  });

  it('não deve permitir prioridade fora do conjunto ["Baixa", "Média", "Alta"]', async () => {
    const taskData = {
      titulo: 'Tarefa Teste',
      descricao: 'Descrição da tarefa teste',
      prioridade: 'Urgente',
      data: moment().tz('America/Recife').add(1, 'days').toDate(),
      responsaveis: ['Responsável 1']
    };

    try {
      const task = new Task(taskData);
      await task.save();
    } catch (error) {
      expect(error.errors.prioridade).toBeDefined();
    }
  });

  it('deve permitir descrição opcional', async () => {
    const taskData = {
      titulo: 'Tarefa Teste',
      prioridade: 'Média',
      data: moment().tz('America/Recife').add(1, 'days').toDate(),
      responsaveis: ['Responsável 1']
    };

    const task = new Task(taskData);
    const savedTask = await task.save();

    expect(savedTask.descricao).toBeUndefined();
  });
  
  it('não deve permitir status fora do conjunto ["Pendente", "Concluída"]', async () => {
    const taskData = {
      titulo: 'Tarefa Teste',
      descricao: 'Descrição da tarefa teste',
      prioridade: 'Média',
      data: moment().tz('America/Recife').add(1, 'days').toDate(),
      responsaveis: ['Responsável 1'],
      status: 'Incompleto'
    };

    try {
      const task = new Task(taskData);
      await task.save();
    } catch (error) {
      expect(error.errors.status).toBeDefined();
    }
  });

  it('deve ter os campos "criadoEm" e "atualizadoEm" definidos automaticamente', async () => {
    const taskData = {
      titulo: 'Tarefa Teste',
      descricao: 'Descrição da tarefa teste',
      prioridade: 'Alta',
      data: moment().tz('America/Recife').add(1, 'days').toDate(),
      responsaveis: ['Responsável 1']
    };

    const task = new Task(taskData);
    const savedTask = await task.save();
    expect(savedTask.criadoEm).toBeDefined();
    expect(savedTask.atualizadoEm).toBeDefined();
  });
});
