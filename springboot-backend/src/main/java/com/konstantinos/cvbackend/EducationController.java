package com.konstantinos.cvbackend;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class EducationController {
    @GetMapping("/education")
    public Map<String, String> getEducation() {
        Map<String, String> education = new HashMap<>();
        education.put("header", "Education");
        education.put("university", "National & Kapodistrian University of Athens");
        education.put("object", "BSc in Informatics and Telecommunications (Sep 2018 – Present)");
        education.put("key", "Key subjects: Software Engineering, Networks, Algorithms, Web Development");
        return education;
    }
}
