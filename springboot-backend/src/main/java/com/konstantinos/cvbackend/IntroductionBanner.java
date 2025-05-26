package com.konstantinos.cvbackend;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class IntroductionBanner {
    @GetMapping("/about")
    public Map<String, String> getAbout() {
        Map<String, String> about = new HashMap<>();
        about.put("header", "About me");
        about.put("introduction", "Creative and driven full-stack software engineer with a passion for building robust, scalable systems. I blend technical precision with a collaborative mindset, always eager to explore new tools and enhance development workflows. Motivated by challenges and continuous learning, I thrive in dynamic, innovative environments.");
        
        return about;
    }
}
