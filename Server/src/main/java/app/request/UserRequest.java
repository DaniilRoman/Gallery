package app.request;


import app.entity.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserRequest {
    private String username;
    private String password;
    public UserRequest(UserDTO user){
        this.username = user.getUsername();
        this.password = user.getName();
    }
}
