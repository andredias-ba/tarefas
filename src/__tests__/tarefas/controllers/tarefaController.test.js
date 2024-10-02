const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../index');
const Tarefa = require('../../../tarefas/models/tarefaModel');

describe('Tarefa Controller', () => {
  beforeAll(async () => {
    // Conectar ao banco de dados de teste
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    // Limpar a coleção e desconectar do banco de dados
    await Tarefa.deleteMany({});
    await mongoose.disconnect();
  });

  let tarefaId;

  it('deve criar uma nova tarefa', async () => {
    const response = await request(app)
      .post('/api/tarefas')
      .send({
        titulo: 'Tarefa 1',
        descricao: 'Descrição da tarefa teste',
        prioridade: 'Alta',
        data: new Date(),
        responsaveis: ['Zezinho']
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
    tarefaId = response.body._id; // id de testes
  });

  it('deve obter todas as tarefas', async () => {
    const response = await request(app).get('/api/tarefas');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('deve obter uma tarefa pelo ID', async () => {
    const response = await request(app).get(`/api/tarefas/${tarefaId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('_id', tarefaId);
  });

  it('deve atualizar uma tarefa pelo ID', async () => {
    const response = await request(app)
      .put(`/api/tarefas/${tarefaId}`)
      .send({
        titulo: 'Tarefa Teste Atualizada',
        descricao: 'Descrição atualizada',
        prioridade: 'Média',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('titulo', 'Tarefa Teste Atualizada');
  });

  it('deve deletar uma tarefa pelo ID', async () => {
    const response = await request(app).delete(`/api/tarefas/${tarefaId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Tarefa deletada com sucesso');
  });
});
