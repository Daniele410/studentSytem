package com.danozzo.studentsystem.controller;

import com.danozzo.studentsystem.model.Student;
import com.danozzo.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/student")
public class StudentController {

    private  StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }


    @PostMapping("/add")
    public ResponseEntity<Student> addStudend(@RequestBody Student student){
        return new ResponseEntity<>(studentService.saveStudent(student), HttpStatus.ACCEPTED);
    }
}
