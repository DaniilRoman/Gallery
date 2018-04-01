package app.response;


import app.entity.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserResponse {
    private String name;
    public UserResponse(UserDTO user){
        this.name = user.getName();
    }
}