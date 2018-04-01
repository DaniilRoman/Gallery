package app.repository;
import app.entity.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;


public interface UserRepository extends JpaRepository<UserDTO, Long> {
    @Query(value = "SELECT * FROM super_user WHERE id = :id", nativeQuery = true)
    UserDTO findMy(@Param("id") BigInteger id);
    UserDTO findByUsername(String username);
}
