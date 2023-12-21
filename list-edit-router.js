const express = require('express');
const listeditrouter = express.Router();

const listadetareas = [
    { id: 1, descripcion: 'Task 1', completado: false },
    { id: 2, descripcion: 'Task 2', completado: false },
  ];

listeditrouter.post('/crear-tarea', (req, res) => {
  const {descripcion}  = req.body;
  const nuevatarea= { id: listadetareas.length + 1, descripcion, completado: false };
  listadetareas.push(nuevatarea);
  res.json(nuevatarea);
});

listeditrouter.delete('/eliminar-tarea/:id', (req, res) => {
  const listadetareaId = parseInt(req.params.id);
  listadetareas = listadetareas.filter(listadetarea => listadetarea.id !== listadetareaId);
  res.json({ message: 'Tarea eliminada exitosamente' });
});

router.put('/actualizar-tarea/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const { descripcion, completado } = req.body;
  listadetareas = listadetareas.map(listadetarea => (listadetarea.id === tareaId ? { id, descripcion, completado } : listadetarea));
  res.json({ message: 'Tarea actualizada exitosamente' });
});

module.exports = listeditrouter