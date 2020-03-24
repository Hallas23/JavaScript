"use strict";

const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Returns a promise that resolves when the company is created
exports.createCompany = function (name, hours) {
    const company = new Company({
        name,
        hours
    });
    return company.save();
};

// Returns a promise that resolves when a company is found with the specified id
exports.getCompany = function (companyId) {
    return Company.findOne({_id: companyId}).exec();
};

// Returns a promise that resolves with an array of all companies
exports.getCompanies = function () {
    return Company.find().populate('employees').exec();
};

// Returns a promise that resolves when the employee is created
exports.createEmployee = function (title, name, employmentDate, wage) {
    const employee = new Employee({
        title,
        name,
        wage,
        employmentDate: parseInt(employmentDate)
    });
    return employee.save();
};

// Returns a promise that resolves with an array of all employees
exports.getEmployees = function () {
    return Employee.find().populate('company').exec();
};

// Returns a promise that resolves when an employee is found with the specified id
exports.getEmployee = function (employeeId) {
    return Employee.findOne({_id: employeeId}).exec();
};

// Returns a promise that resolves when the employee and the company are connected (bidirectional)
exports.connectEmployeeToCompany = function (company, employee) {
    company.employees.push(employee);
    employee.company = company;
    return Promise.all([company.save(), employee.save()]);
};
