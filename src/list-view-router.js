const express = require('express');
const router = express.Router();
const listadetareas = require("../data")

 router.use(express.json());

 router.get("/this-should-exists", (req, res)=>{
     res.status(404).send("Not found")
 }); 

router.get('/completado-tarea', (req, res) => {
  const completadotarea = listadetareas.filter(listadetarea => listadetarea.completado);
  res.json(completadotarea);
});

router.get('/incompleto-tarea', (req, res) => {
  const incompletadotarea = listadetareas.filter(listadetarea => !listadetarea.completado);
  res.json(incompletadotarea);
});

module.exports = router;
