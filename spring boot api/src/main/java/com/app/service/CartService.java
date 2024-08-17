package com.app.service;

import com.app.exception.ProductException;
import com.app.model.Cart;
import com.app.model.CartItem;
import com.app.model.User;
import com.app.dto.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
