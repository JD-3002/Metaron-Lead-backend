const express = require('express');
const {
  createProject,
  listProjects,
  getProjectById,
  deleteProject,
  listProjectsByLead,
  createProjectForLead,
} = require('../controllers/project.controller');
const verifyAdmin = require('../middlewares/auth.middleware');

const router = express.Router();

// Public create endpoint; add verifyAdmin if you want auth
router.post('/', createProject);
router.get('/', listProjects);
router.post('/lead/:leadId', createProjectForLead);
router.get('/lead/:leadId', listProjectsByLead);
router.get('/:id', getProjectById);
router.delete('/:id', verifyAdmin, deleteProject);

module.exports = router;
