const express = require('express');
const router = express.Router();
const tipoProyectosRepository = require('../repositories/tipos_proyectos');

// GET todos los tipo proyectos
router.get('/', async (req, res) => {
    try {
      const tipoProyectos = await tipoProyectosRepository.getAll();
      res.status(200).json(tipoProyectos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener tipo Proyectos', error: error.message });
    }
});

// POST crear nuevo tipo proyectos
router.post('/', async (req, res) => {
    try {
      const nuevoTipoProyectos = await tipoProyectosRepository.create(req.body);
      res.status(201).json({ 
        message: 'tipo Proyectos creado exitosamente',
        tipoProyecto: nuevoTipoProyectos
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Error al crear tipo Proyectos', error: error.message });
    }
  });

// PUT actualizar tipo proyectos
router.put('/:id', async (req, res) => {
    try {
      const tipoProyectoActualizado = await tipoProyectosRepository.update(req.params.id, req.body);
      if (tipoProyectoActualizado) {
        res.status(200).json({ 
          message: 'tipo Proyectos actualizado exitosamente',
          tipoProyecto: tipoProyectoActualizado
        });
      } else {
        res.status(404).json({ message: 'tipo Proyectos no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Error al actualizar tipo Proyectos', error: error.message });
    }
  });

// DELETE eliminar tipo proyectos
router.delete('/:id', async (req, res) => {
    try {
      const eliminado = await tipoProyectosRepository.delete(req.params.id);
      if (eliminado) {
        res.status(200).json({ message: 'tipo Proyectos eliminado exitosamente' });
      } else {
        res.status(404).json({ message: 'tipo Proyectos no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar tipo Proyectos', error: error.message });
    }
  });
  
module.exports = router;