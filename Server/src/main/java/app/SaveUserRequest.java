package app;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SaveUserRequest {
    private String username;
    private String password;
    private String name;
    private String email;
    SaveUserRequest(UserDTO user){
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.name = user.getName();
        this.email = user.getEmail();
    }
}