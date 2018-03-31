package app;

import lombok.Cleanup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import java.math.BigInteger;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private EntityManagerFactory entityManagerFactory;
    public BigInteger getNextId() {
        @Cleanup EntityManager em = entityManagerFactory.createEntityManager();
        BigInteger tmp =  (BigInteger) em.createNativeQuery("select nextval('super_user_seq')").getSingleResult();
        System.out.println("------------"+tmp);
        return tmp;
    }
}
