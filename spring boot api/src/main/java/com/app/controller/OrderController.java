package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import com.app.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.exception.OrderException;
import com.app.exception.UserException;
import com.app.entities.Address;
import com.app.entities.Order;
import com.app.entities.User;
import com.app.service.OrderService;
import com.app.service.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

	private final UserRepository userRepository;
	private OrderService orderService;
	private UserService userService;

	public OrderController(OrderService orderService, UserService userService, UserRepository userRepository) {
		this.orderService = orderService;
		this.userService = userService;
		this.userRepository = userRepository;
	}

	@PostMapping("/")
	public ResponseEntity<Order> createOrderHandler(@RequestBody Address shippingAddress,
													@RequestHeader("Authorization") String jwt) throws UserException {

		User user = userService.findUserProfileByJwt(jwt);
		Order order = orderService.createOrder(user, shippingAddress);

		return new ResponseEntity<Order>(order, HttpStatus.OK);

	}

	@GetMapping("/user")
	public ResponseEntity<List<Order>> usersOrderHistoryHandler(@RequestHeader("Authorization")
																String jwt) throws OrderException, UserException {

		User user = userService.findUserProfileByJwt(jwt);
		List<Order> orders = orderService.usersOrderHistory(user.getId());
		return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
	}

	@GetMapping("/{orderId}")
	public ResponseEntity<Order> findOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization")
	String jwt) throws OrderException, UserException {

		User user = userService.findUserProfileByJwt(jwt);
		Order orders = orderService.findOrderById(orderId);
		return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Order> deleteOrderById(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws OrderException, UserException {
		User user = userService.findUserProfileByJwt(jwt);
		Order orders = orderService.findOrderById(id);
		if (orders != null) {
			orderService.deleteOrder(id);
			return new ResponseEntity<>(orders, HttpStatus.OK);
		}
		return new ResponseEntity<>(orders, HttpStatus.NOT_FOUND);

	}

	@GetMapping("/getall")
	public ResponseEntity<List<Order>> getAll(@RequestHeader("Authorization")String jwt) throws UserException ,OrderException
	{
		User user=userService.findUserProfileByJwt(jwt);
		List<Order> orders=new ArrayList<>();
		orders=orderService.getAllOrders();
		return new ResponseEntity<>(orders,HttpStatus.OK);
	}
	@GetMapping("/byuserid")
	public ResponseEntity<List<Order>> getOrderByUserId(@RequestHeader("Authorization")String jwt) throws Exception ,OrderException
	{
		User user=userService.findUserProfileByJwt(jwt);
		List<Order> orders=orderService.findOrderByUserId(user.getId());
		return new ResponseEntity<>(orders,HttpStatus.OK);
	}
}
