const express = require('express');
const {
  createProject,
  listProjects,
  getProjectById,
  deleteProject,
} = require('../controllers/project.controller');
const verifyAdmin = require('../middlewares/auth.middleware');

const router = express.Router();

// Public create endpoint; add verifyAdmin if you want auth
router.post('/', createProject);
router.get('/', listProjects);
router.get('/:id', getProjectById);
router.delete('/:id', verifyAdmin, deleteProject);

module.exports = router;
