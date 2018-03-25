package app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.ws.rs.core.MediaType;

@RestController
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON)
public class UserController {

    @Autowired
    private UserRepository userRepository;

//    @GetMapping(path="/add")
//    public @ResponseBody String addNewUser (@RequestParam String name
//            , @RequestParam String email) {
////
////
////        UserDTO n = new UserDTO();
////        n.setName(name);
////        n.setEmail(email);
////        //userRepository.save(n);
//        return "Saved";
//    }

    @RequestMapping(value = "/find", method = RequestMethod.GET)
    public ResponseEntity getAllUsers(@RequestParam(required = true) Long id) {
        return new ResponseEntity<UserDTO>(userRepository.findMy(id), HttpStatus.OK);
//        return new ResponseEntity<List<UserDTO>>(userRepository.findAll(), HttpStatus.OK);
    }
}