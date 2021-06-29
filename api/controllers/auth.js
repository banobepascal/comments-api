const User = require('../models/Users');

exports.createUser = async (req, res) => {
    if (!req.body.firstname) {
        return res.status(400).json({
            message: 'firstname cannot be empty'
        });
    };

    try {
        const newUser = new User({
            firstname: req.body.firstname
        });

        await newUser.save();
        return res.status(201).json({
            status: 201, 
            message: 'successfully created account',
            user: newUser,
        });
    } catch(err){
       return res.status(500).json({error: err.message})
    }
};
