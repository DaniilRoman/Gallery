package app.service;

import app.request.UserRequest;
import app.response.UserResponse;

import java.math.BigInteger;

public interface UserService {
    BigInteger getNextId();
    String chechExist(String username,String password);
}
