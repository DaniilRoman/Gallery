package app;

import lombok.*;

import javax.persistence.*;
import java.math.BigInteger;


@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "super_user")
public class UserDTO {
    @Id
    @Column(name = "id", nullable = false)
    private BigInteger id;
    @Column(name = "username",nullable = false)
    private String username;
    @Column(name = "password",nullable = false)
    private String password;
    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "name",nullable = false)
    private String name;
}
