const express = require('express');
const router = express.Router();
const listadetareas = require("./data.js")


 router.get("/this-should-exists", (req, res)=>{
     res.status(404).send("Not found")
 }); 

router.get('/completadas', (req, res) => {
  const completado = listadetareas.filter(listadetarea => listadetarea.completado);
  res.json(completado);
});

router.get('/incompletas', (req, res) => {
  const incompletadotarea = listadetareas.filter(listadetarea => !listadetarea.completado);
  res.json(incompletadotarea);
});

module.exports = router;
