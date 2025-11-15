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
