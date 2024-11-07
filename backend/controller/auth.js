const Auth = require('../models/Auth');

exports.createAuth = (req,res,next) => {
    delete req.body._id;
    const auth = new Auth ({
        ...req.body
    });
    console.log('auth', auth);
    auth.save()
        .then(() => res.status(201).json ({ message: 'Auth crée' })
        .catch(error => res.status(400).json({ error })));
};

