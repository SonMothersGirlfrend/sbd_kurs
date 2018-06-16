package com.zero.demo.model;


import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.util.UUID;

@Table
public class Events {

    @PrimaryKey
    private UUID id;

    @Column("description")
    private String description;
    @Column("days_until_expire")
    private int days;
    @Column("criminal_codes")
    private String codes;

    public Events() {
    }


    public Events(String name, int age, String codes) {
        this.description = name;
        this.days = age;
        this.codes=codes;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setDescription(String name) {
        this.description = name;
    }

    public String getDescription() {
        return description;
    }

    public void  setDays(int age) {
        this.days = age;
    }

    public int getDays() {
        return this.days;
    }

    public String getCodes() {
        return codes;
    }

    public void setCodes(String active) {
        this.codes = active;
    }

}
