const express = require('express');
const app = express();
const port = 3000;

const listadetareas = [
  {
    id: "123456",
    description: 'sacar a caminar al perro',
    Completed: false,
  }];

app.get('/lista', (req, res) => {
  res.json(listadetareas);
});

app.listen(port, () => {console.log(`Servidor Express funcionando en http://localhost:${port}`);});