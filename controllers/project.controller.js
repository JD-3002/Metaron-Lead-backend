const Project = require('../models/project.model');
const mongoose = require('mongoose');

exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    const populated = await project.populate('lead');
    res.status(201).json(populated);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
};

exports.listProjects = async (req, res) => {
  const projects = await Project.find().populate('lead');
  res.json(projects);
};

exports.listProjectsByLead = async (req, res) => {
  const { leadId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(leadId)) {
    return res.status(400).json({ message: 'Invalid lead id' });
  }
  const projects = await Project.find({ lead: leadId }).populate('lead');
  res.json(projects);
};

exports.createProjectForLead = async (req, res) => {
  const { leadId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(leadId)) {
    return res.status(400).json({ message: 'Invalid lead id' });
  }
  try {
    const project = new Project({ ...req.body, lead: leadId });
    await project.save();
    const populated = await project.populate('lead');
    res.status(201).json(populated);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('lead');
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: 'Invalid project id' });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid project id' });
  }
};
