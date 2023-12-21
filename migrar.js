const express = require('express');
const app = express();
const port = 3000;

const listviewrouter = require("./list-view-router")
const listeditrouter = require("./list-edit-router")

app.use("/list-view-router", listviewrouter);
app.use("/list-edit-router", listeditrouter);

const listadetareas = [
 {
   id: "123456",
   descripcion: 'sacar a caminar al perro',
   completado: false,
}, 
];

app.get('/lista', (req, res) => {
  res.json(listadetareas);
});

app.listen(port, () => {console.log(`Servidor Express funcionando en http://localhost:${port}`);});