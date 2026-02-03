const mongoose = require('mongoose');

const FeatureSchema = new mongoose.Schema(
  {
    Bedrooms: { type: Number, default: 0 },
    Bathroom: { type: Number, default: 0 },
    LivingRooms: { type: Number, default: 0 },
    Kitchen: { type: Number, default: 0 },
    Balcony: { type: Number, default: 0 },
    Floors: { type: Number, default: 0 },
  },
  { _id: false }
);

const ImageSchema = new mongoose.Schema(
  {
    name: String,
    size: Number,
    type: String,
    url: String,
  },
  { _id: false }
);

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String },
    propertyType: { type: String },
    dealType: { type: String },
    description: { type: String },
    price: { type: String },
    size: { type: String },
    availabilityType: { type: String, enum: ['fixed', 'flexible', 'immediate'], default: 'fixed' },
    availabilityDate: { type: Date },
    amenities: [{ type: String }],
    features: FeatureSchema,
    images: [ImageSchema],
    video: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
