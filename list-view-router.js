const express = require('express');
const routercom = express.Router();

const listadetareas = [
  { id: 1, description: 'Task 1', Completed: true },
  { id: 2, description: 'Task 2', Completed: false },
];

router.get('/completed-tasks', (req, res) => {
  const completedTasks = listadetareas.filter(listadetarea => listadetarea.completed);
  res.json(completedTasks);
});

router.get('/incomplete-tasks', (req, res) => {
  const incompleteTasks = listadetareas.filter(listadetarea => !listadetarea.completed);
  res.json(incompleteTasks);
});

module.exports = routercom;
