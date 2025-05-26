package com.konstantinos.cvbackend;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SkillsController {
    @GetMapping("/skills")
    public Map<String, String> getSkills() {
        Map<String, String> skills = new HashMap<>();
        skills.put("header", "Technical Skills");
        skills.put("languages", "Languages & Frameworks:");
        skills.put("languagestext", "Java, C, C++, Python, JavaScript, SQL, CSS, Assembly, React.js, Node.js");
        skills.put("tools", "Tools & Platforms:");
        skills.put("toolstext", "Docker, Jenkins, GitLab, YAML, AsciiDoc, VirtualBox, Cisco Routers, ITSM Tools");
        
        
        return skills;
    }
}
