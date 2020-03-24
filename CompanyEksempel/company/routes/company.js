const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        controller.getCompanies()
            .then(val => res.json(val))
            .catch(err => {
                console.error("Error: " + err);
                if (err.stack) console.error(err.stack);
                res.status(500).send(err);
            });
    })
    .post('/', (req, res) => {
        const {name, hours} = req.body;
        controller.createCompany(name, hours)
            .then(() => res.json({message: 'Company saved!'}))
            .catch(err => {
                console.error("Error: " + err);
                if (err.stack) console.error(err.stack);
                res.status(500).send(err);
            });
    });

module.exports = router;
