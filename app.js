require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const adminRoutes = require('./routes/admin.routes');
const leadRoutes = require('./routes/lead.routes');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/leads', leadRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
