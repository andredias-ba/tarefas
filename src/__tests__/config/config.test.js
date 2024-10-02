const mongoose = require('mongoose');
require('dotenv').config();

describe('Database Connection', () => {
  it('deve conectar ao banco de dados com sucesso', async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    expect(connection.connection.readyState).toBe(1); // 1 significa conectado
  });

  it('deve falhar ao conectar com uma URI inválida', async () => {
    try {
      await mongoose.connect('mongodb://invaliduri', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
