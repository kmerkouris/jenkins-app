package com.konstantinos.cvbackend;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ContactController {
    @GetMapping("/contact")
    public Map<String, String> getContact() {
        Map<String, String> contact = new HashMap<>();
        contact.put("header", "Contact");
        contact.put("url", "linkedin.com/in/konstantinos-merkouris-a576a4281");
        contact.put("phone", "6947323404");
        contact.put("email", "ntinosmerkk@gmail.com");
        
        return contact;
    }
}
