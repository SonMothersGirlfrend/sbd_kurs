package com.zero.model;

import org.neo4j.ogm.annotation.NodeEntity;

import java.util.List;
@NodeEntity
public class Reason {
    private Long id;
    private String name;

    public Reason(){}

    public Reason(Long id, String name){
        this.id=id;
        this.name=name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
