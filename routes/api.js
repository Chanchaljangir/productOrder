let express = require('express');
let router = express.Router();
let _employee = require("../controllers/employee")
let _employeeAssg = require("../controllers/employeeAssigment")

router.post("/employee", _employee.addNewEmployee);
router.get("/employees", _employee.getAllEmployee);
router.get("/eligiableSupervisoryees/:empId", _employee.getAllEligiableSupervisor);
router.get("/specificEmployee/:empId", _employee.getSpecificEmployee);

router.post("/assignEmployee", _employeeAssg.assignEmployee);
router.get("/superviour/:empId", _employeeAssg.findSuperviour);
router.get("/superviourEmp/:empId", _employeeAssg.superviourEmp);

module.exports = router;