package app;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<UserDTO, Long> {
    @Query(value = "SELECT * FROM super_user WHERE id = :id", nativeQuery = true)
    UserDTO findMy(@Param("id") Long id);
    UserDTO findByUsername(String username);
}
