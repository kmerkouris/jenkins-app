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
        Map<String, String> experience = new HashMap<>();
        experience.put("company", "Netcompany-Intrasoft, Athens, Greece | Hybrid");
        experience.put("jobtitle", "Full Stack Software Engineer (Jul 2024 – Present)");
        experience.put("tools1", "Web development with Node.js, React.js, and Docker");
        experience.put("tools2", "Maintained CI/CD pipelines with Jenkins and GitLab");
        experience.put("tools3", "Configured OPA policies and Spring Cloud Gateway");
        experience.put("jobtitle2", "Junior Full Stack Software Engineer (Intern) (Jan 2024 – Jul 2024)");
        experience.put("tools4", "Supported development tasks and participated in code reviews");
        experience.put("company2", "Technon");
        experience.put("jobtitle3", "IT Network and Security Engineer (Oct 2023 – Dec 2023)");
        experience.put("tools5", "Conducted IT audits and configured Cisco routers\r\n" + //
                        "Integrated network systems with VirtualBox and ITSM tools");
        return experience;
    }
}
