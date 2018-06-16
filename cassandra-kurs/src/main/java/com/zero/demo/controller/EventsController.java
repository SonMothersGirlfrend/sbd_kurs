package com.zero.demo.controller;


import com.zero.demo.repo.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EventsController {

    @Autowired
    EventsRepository eventsRepository ;

    @Mapping("/customers/create")
    public ResponseEntity<Customer> createCustomer(@Valid @RequestBody Customer customer) {
        System.out.println("Create Customer: " + customer.getName() + "...");

        customer.setId(UUIDs.timeBased());
        customer.setActive(false);
        Customer _customer = customerRepository.save(customer);
        return new ResponseEntity<>(_customer, HttpStatus.OK);
    }
}
