const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        controller.getEmployees()
            .then(val => res.json(val))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            });
    })
    .post('/', (req, res) => {
        let employee = undefined;
        const {title, name, employmentDate, wage, companyId} = req.body;
        controller.createEmployee(title, name, employmentDate, wage)
            .then(emp => {
                employee = emp;
                return controller.getCompany(companyId);
            })
            .then(company => controller.connectEmployeeToCompany(company, employee))
            .then(() => res.json({message: 'Employee saved!'}))
            .catch(err => {
                console.error("Error: " + err);
                if (err.stack) console.error(err.stack);
                res.status(500).send(err);
            });
    });

module.exports = router;
