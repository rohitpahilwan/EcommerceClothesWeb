package com.app.service;

import java.util.List;

import com.app.exception.UserException;
import com.app.entities.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public List<User> findAllUsers();

}
