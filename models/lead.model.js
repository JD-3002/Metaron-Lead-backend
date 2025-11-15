const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  mobile:    { type: String, required: true },
  email:     { type: String, required: true },
  propertyIntent: {
    type: String,
    enum: ['sell', 'rent', 'both'],
    required: true,
  },
});

module.exports = mongoose.model('Lead', LeadSchema);
