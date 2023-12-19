const express = require('express');
const app = express();
const port = 3000;

const routercom = require("./list-view-router")
const router = require("./list-edit-router")


//const listadetareas = [
 // {
 //   id: "123456",
 //   description: 'sacar a caminar al perro',
 //   Completed: false,
//}, 
//];
app.use("//list-view-router", routercom);
app.use("/list-edit-router", router);

app.get('/lista', (req, res) => {
  res.json(listadetareas);
});

app.listen(port, () => {console.log(`Servidor Express funcionando en http://localhost:${port}`);});