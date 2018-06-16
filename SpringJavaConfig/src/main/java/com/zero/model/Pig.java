package com.zero.model;

import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
public class Pig {

    private Long id;
    private String name;

    @Relationship(type="PAST_ACTIONS")
    private List<Action> actionsLast;

    @Relationship(type="ACTIONS_NOW")
    private List<Action> actionsNow;

    public Pig(){}
    public Pig(Long id, String name, List<Action> actions1,List<Action> actions2 ){
        this.id=id;
        this.actionsLast=actions1;
        this.name=name;
        this.actionsNow=actions2;
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
    public List<Action> getActionsLast() {
        return actionsLast;
    }

    public void setActionsLast(List<Action> actions) {
        this.actionsLast = actions;
    }
    public List<Action> getActionsNow() {
        return actionsNow;
    }

    public void setActionsNow(List<Action> actions) {
        this.actionsNow = actions;
    }
}



