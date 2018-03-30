package app;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@AllArgsConstructor
@EqualsAndHashCode
@NoArgsConstructor
public class User {
    private BigInteger id;
    private String username;
    private String name;
    User(UserDTO user){
        this.id = user.getId();
        this.username = user.getUsername();
        this.name = user.getName();
    }
}
