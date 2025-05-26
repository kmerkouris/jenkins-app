package com.konstantinos.cvbackend;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProfileController {

    @GetMapping("/profile")
    public Map<String, String> getProfile() {
        Map<String, String> profile = new HashMap<>();
        profile.put("name", "Konstantinos D Merkouris");
        profile.put("role", "Full-Stack | Software Engineer");
        profile.put("location", "Athens, Greece");
        return profile;
    }
}
