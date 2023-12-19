const express = require('express');
const router = express.Router();

const listadetareas = [
    { id: 1, description: 'Task 1', Completed: true },
    { id: 2, description: 'Task 2', Completed: false },
  ];

router.post('/create-task', (req, res) => {
  const {description}  = req.body;
  const newTask = { id: listadetareas.length + 1, description, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

router.delete('/delete-task/:id', (req, res) => {
  const listadetareaId = parseInt(req.params.id);
  listadetareas = listadetareas.filter(listadetarea => listadetarea.id !== listadetareaId);
  res.json({ message: 'Tarea eliminada exitosamente' });
});

module.exports = router