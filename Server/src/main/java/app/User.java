package app;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@EqualsAndHashCode
@NoArgsConstructor
public class User {
    private Long id;
    private String username;
    private String name;
    User(UserDTO user){
        this.id = user.getId();
        this.username = user.getUsername();
        this.name = user.getName();
    }
}
