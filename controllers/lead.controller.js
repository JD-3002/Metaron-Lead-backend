const Lead = require('../models/lead.model');

exports.createLead = async (req, res) => {
  const { firstName, lastName, mobile, email, propertyIntent } = req.body;
  const lead = new Lead({ firstName, lastName, mobile, email, propertyIntent });
  await lead.save();
  res.status(201).json(lead);
};

exports.listLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};

exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: 'Invalid lead id' });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const deleted = await Lead.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid lead id' });
  }
};
