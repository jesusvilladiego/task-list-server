
const express = require('express');
const app = express();
const port = 3000;

const listadetareas = require("./data")
const listviewrouter = require("./src/list-view-router")
const listeditrouter = require("./src/list-edit-router")

app.use("/list-view-router", listviewrouter);
app.use("/list-edit-router", listeditrouter);



app.get("/this-should-exists", (req, res)=>{
  res.status(404).send("Not found")
});

app.get('/', (req, res) => {
  res.json(listadetareas);
});

app.use('/editartareas', listeditrouter, () =>{
  console.log("estas editando la lista de tareas")
});

app.use('/vertareas', listviewrouter, () => {
  res.json(listadetareas)
  console.log("estas viendo la lista de tareas")
})

app.listen(port, () => {console.log(`Servidor Express funcionando en http://localhost:${port}`);});
