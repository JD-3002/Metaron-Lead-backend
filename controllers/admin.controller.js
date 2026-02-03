const Admin = require('../models/admin.model');
const { generateToken } = require('../utils/jwt');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin)
    return res.status(401).json({ message: 'Invalid credentials' });

  const isMatch = await admin.comparePassword(password);
  if (!isMatch)
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken({ id: admin._id, email: admin.email });
  
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',   // true for HTTPS
    maxAge: 60 * 60 * 1000  // 1 hour
  });
  res.json({ message: 'Login successful' });
};

// Clear the auth cookie to log out the admin
exports.logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  });
  res.json({ message: 'Logout successful' });
};


// For initial setup, use this register function; later restrict/remove for security!
exports.register = async (req, res) => {
  const { email, password } = req.body;
  const admin = new Admin({ email, password });
  await admin.save();
  res.status(201).json({ message: 'Admin registered' });
};
