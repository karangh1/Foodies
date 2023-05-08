import User from '../models/login.js'

export const register = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        post
      } = req.body;
  
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        post
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

