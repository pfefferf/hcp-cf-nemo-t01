'use strict';

module.exports = function (oApp) {

    let User = require('../../db/models/user.js');

    oApp.get('/api/user', function (req, res) {
        User.find(function (err, users) {
            if (err) {
                return res.status(500).send('Error occurred: database error');
            }

            res.json(users.map(function (user) {
                return {
                    id: user.id,
                    user_name: user.user_name,
                    last_name: user.last_name,
                    first_name: user.first_name
                };
            }));
        });
    });

    oApp.get('/api/user/:id', function (req, res) {
        User.findOne({ id: req.params.id }, function (err, user) {
            if (err || user === null) {
                return res.status(500).send('Error occurred: database error');
            }

            res.json({
                id: user.id,
                user_name: user.user_name,
                last_name: user.last_name,
                first_name: user.first_name
            });
        });
    });

    oApp.post('/api/user', function (req, res) {
        new User({
            id: req.body.id,
            user_name: req.body.user_name,
            last_name: req.body.last_name,
            first_name: req.body.first_name
        }).save(function (err, user) {
            if (err) {
                return res.status(500).send('Error occurred: database error');
            }
            res.json({
                id: user.id
            });
        });

    });

    oApp.delete('/api/user/:id', function (req, res) {
        User.remove({ id: req.params.id }, function (err) {
            if (err) {
                return res.status(500).send('Error occurred: database error');
            }

            return res.send();
        });
    });

    oApp.put('/api/user/:id', function(req,res){
        User.update({ 
            id: req.params.id
        }, {
            user_name: req.body.user_name,
            last_name: req.body.last_name,
            first_name: req.body.first_name  
        }, function(err){
            if(err){
                return res.status(500).send('Error occurred: database error');
            }
            res.send();
        }); 
    });

};