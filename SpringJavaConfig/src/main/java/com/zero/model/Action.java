package com.zero.model;

import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
public class Action {

    private Long id;
    private String name;

    @Relationship(type="REASON")
    private List<Reason> reasons;

    public Action(){}

    public Action(Long id, String name,List<Reason> reasons){
        this.id=id;
        this.name=name;
        this.reasons=reasons;
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

    public List<Reason> getReasons() {
        return reasons;
    }

    public void setReasons(List<Reason> reasons) {
        this.reasons = reasons;
    }

}
