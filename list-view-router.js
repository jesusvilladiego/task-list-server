const express = require('express');
const listviewrouter = express.Router();



listviewrouter.get('/completado-tarea', (req, res) => {
  const completadotarea = listadetareas.filter(listadetarea => listadetarea.completado);
  res.json(completadotarea);
});

listviewrouter.get('/incompleto-tarea', (req, res) => {
  const incompletadotarea = listadetareas.filter(listadetarea => !listadetarea.completado);
  res.json(incompletadotarea);
});

module.exports = listviewrouter;
