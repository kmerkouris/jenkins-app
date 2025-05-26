package com.konstantinos.cvbackend;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ExperienceController {
    @GetMapping("/experience")
    public Map<String, String> getExperience() {
        Map<String, String> about = new HashMap<>();
        about.put("company", "Netcompany-Intrasoft, Athens, Greece | Hybrid");
        about.put("jobtitle", "Full Stack Software Engineer (Jul 2024 – Present)");
        about.put("tools1", "Web development with Node.js, React.js, and Docker");
        about.put("tools2", "Maintained CI/CD pipelines with Jenkins and GitLab");
        about.put("tools3", "Configured OPA policies and Spring Cloud Gateway");
        about.put("jobtitle2", "Junior Full Stack Software Engineer (Intern) (Jan 2024 – Jul 2024)");
        about.put("tools4", "Supported development tasks and participated in code reviews");
        about.put("company2", "Technon");
        about.put("jobtitle3", "IT Network and Security Engineer (Oct 2023 – Dec 2023)");
        about.put("tools5", "Conducted IT audits and configured Cisco routers\r\n" + //
                        "Integrated network systems with VirtualBox and ITSM tools");
        return experience;
    }
}
