package com.Customer.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Customer.model.Customer;

@Repository
public interface CustomerRepo extends MongoRepository<Customer, String>{
    public Customer findByEmail(String Email);
}
