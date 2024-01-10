const express = require('express');
const router = express.Router();

const listadetareas = [
  {
    id: "123456",
    descripcion: 'sacar a caminar al perro',
    completado: false,
 }, 
 ];

router.get('/completado-tarea', (req, res) => {
  const completadotarea = listadetareas.filter(listadetarea => listadetarea.completado);
  res.json(completadotarea);
});

router.get('/incompleto-tarea', (req, res) => {
  const incompletadotarea = listadetareas.filter(listadetarea => !listadetarea.completado);
  res.json(incompletadotarea);
});

module.exports = router;
