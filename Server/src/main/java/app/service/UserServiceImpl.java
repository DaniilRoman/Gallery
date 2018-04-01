package app.service;

import app.entity.UserDTO;
import app.repository.UserRepository;
import app.request.UserRequest;
import app.response.UserResponse;
import app.service.UserService;
import lombok.Cleanup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import java.math.BigInteger;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    private EntityManagerFactory entityManagerFactory;
    public BigInteger getNextId() {
        @Cleanup EntityManager em = entityManagerFactory.createEntityManager();
        return   (BigInteger) em.createNativeQuery("select nextval('super_user_seq')").getSingleResult();
    }

    @Override
    public String chechExist(String username, String password) {
        try{
            UserDTO user = userRepository.findByUsername(username);
            if(!password.equals(user.getPassword())) return "trable with password";
            return user.getName();
        }catch (Exception ex){return "null";}
    }
}
