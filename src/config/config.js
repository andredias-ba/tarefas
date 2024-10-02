const mongoose = require('mongoose');
require('dotenv').config();

// Pegando a URI do MongoDB a partir do arquivo .env
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("Erro: MONGODB_URI não está definida no arquivo .env.");
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
  });
