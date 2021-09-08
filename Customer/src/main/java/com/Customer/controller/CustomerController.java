package com.Customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Customer.jwtutil.JwtUtil;
import com.Customer.model.AuthenticationRequest;
import com.Customer.model.AuthenticationResponse;
import com.Customer.model.Customer;
import com.Customer.repository.CustomerRepo;
import com.Customer.services.customerService;

import io.swagger.annotations.Api;

@Api
@RestController
@RequestMapping("/customer")
@CrossOrigin(origins="*",allowedHeaders = "*")
public class CustomerController {
	
		@Autowired
	    private customerService customerService;
		
		@Autowired
		CustomerRepo customerRepo;
		
		@Autowired
	    private AuthenticationManager authenticationManager;
		
		@Autowired
	    private JwtUtil jwtUtil;

		
		 
		 @GetMapping("/test")
		    public String test() {
			 return "testing";
		    }
		 @CrossOrigin(origins="*",allowedHeaders = "*")
		 @RequestMapping("/create")
		    public String create(@RequestBody Customer customer) {
		        Customer p = customerService.create(customer);
		        return p.toString();
		    }
		 @CrossOrigin(origins="*",allowedHeaders = "*")
		 @RequestMapping("/update")
		    public String update(@RequestParam String Name, @RequestParam String password,@RequestParam String email,@RequestParam String contact) {
		        Customer p = customerService.update(Name, password,email,contact);
		        return p.toString();
		 }
		
		 
		 @RequestMapping("/getAll")
		    public List<Customer> getAll(){
		        return customerService.getAll();
		   }
		 
		 @RequestMapping("/deleteAll")
		    public void deteleall(){
		       customerService.deleteAll();
		   }
		
		 @RequestMapping("/delete")
		    public void deteleone(@RequestParam String email){
		       customerService.delete(email);
		   }
		 @RequestMapping("/get")
		    public Customer getCustomer(@RequestBody AuthenticationRequest authenticationRequest){
		        Customer p=customerService.getByEmail(authenticationRequest.getEmail());
		        return p;
		    }
		    
		 
		    @RequestMapping("/getlogin")
		    public String getCustomer(@RequestParam String email) {
		        Customer p = customerService.getByEmail(email);
		        return p.toString();
		    }
		    @CrossOrigin(origins="*",allowedHeaders = "*")
		 	@PostMapping("/authenticate")
		    private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
		        String email=authenticationRequest.getEmail();

		        try
		        {
		            authenticationManager.authenticate(
		                    new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
		        }
		        catch (Exception e)
		        {
		            return ResponseEntity.ok(new AuthenticationResponse("Invalid Username or Password")) ;
		        }
		        UserDetails loadedUser=customerService.loadUserByUsername(email);
		        String generatedToken =jwtUtil.generateToken(loadedUser);
		        return ResponseEntity.ok(new AuthenticationResponse(generatedToken));
		    }
		 
		

}
