const express = require('express');
const {
    createStudent,
    getAllStudents,
    updateStudent,
    deleteStudent
} = require('../Controllers/StudentController'); // Adjust the path based on your structure

const router = express.Router();

router.post('/creatstudent', createStudent);

router.get('/getstudent', getAllStudents);

router.put('/updatestudent', updateStudent);

router.delete('/deletestudent', deleteStudent);

module.exports = router;