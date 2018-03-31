package app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.ws.rs.core.MediaType;
import java.math.BigInteger;

@RestController
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@RequestMapping(value = "/user", produces = MediaType.APPLICATION_JSON)
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity addNewUser (@Valid @RequestBody SaveUserRequest request) {
        System.out.println(request.toString());
        UserDTO newUser = new UserDTO();
        newUser.setUsername(request.getUsername());
        newUser.setPassword(request.getPassword());
        newUser.setName(request.getName());
        newUser.setEmail(request.getEmail());
        newUser.setId(userService.getNextId());
        return new ResponseEntity<SaveUserRequest>(new SaveUserRequest(userRepository.save(newUser)), HttpStatus.OK);
    }

    @RequestMapping(value = "/username/{username}/find", method = RequestMethod.GET)
    public ResponseEntity getUserByUsername(@PathVariable(required = true) String username) {
        return new ResponseEntity<User>(new User(userRepository.findByUsername(username)), HttpStatus.OK);
//        return new ResponseEntity<List<UserDTO>>(userRepository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/id/{id}/find", method = RequestMethod.GET)
    public ResponseEntity getAllUsers(@PathVariable(required = true) BigInteger id) {
        return new ResponseEntity<User>(new User(userRepository.findMy(id)), HttpStatus.OK);
//        return new ResponseEntity<List<UserDTO>>(userRepository.findAll(), HttpStatus.OK);
    }
}