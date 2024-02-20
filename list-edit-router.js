const express = require('express');
const router = express.Router();
const listadetareas = require("./data")

router.use(express.json());

  const validartareas = (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'cuerpo vacio' });
      }
  
      const { descripcion } = req.body;
      if (!descripcion) {
        return res.status(400).json({ error: ' información no valida o atributos faltantes para crear las tareas' });
      }
    }
  
    next();
  };

  router.post('/crear-tarea', (req, res) => {
  const {descripcion}  = req.body;
  const nuevatarea= { id: listadetareas.length + 1, descripcion, completado: false };
  listadetareas.push(nuevatarea);
  res.json(nuevatarea);
});

router.delete('/eliminar-tarea/:id', (req, res) => {
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


module.exports = {router,validartareas}