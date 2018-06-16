package com.zero.repo;

import com.zero.model.Pig;
import org.springframework.data.neo4j.repository.GraphRepository;

import java.util.List;

public interface OrgRepo extends GraphRepository {
    List<Pig> findByName (String name);
}
