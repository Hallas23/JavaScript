var app = require('../app.js');
var controller = require("../controllers/controller");
var should = require('should');

describe('controller test - promise', function () {
    it('getEmployees() test', function () {
        return controller.getEmployees()
            .then(function (res) {
                res.length.should.be.greaterThanOrEqual(2);
                res[0].name.should.be.equal('Viggo');
                res[1].name.should.be.equal('Ida');
                return true;
            }
        );
    });
});

