package com.zero;

import com.zero.model.Pig;
import com.zero.repo.OrgRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrgService {

    @Autowired
    OrgRepo orgRepo;

    @Transactional
    public void saveOrg(Pig pig) {
        orgRepo.save(pig);
    }

    @Transactional
    public List<Pig> readByName(String name) {
        return orgRepo.findByName(name);
    }

    @Transactional
    public void update(Pig pig) {

        orgRepo.save(pig);
    }

    @Transactional
    public void delete(Pig pig) {
        orgRepo.delete(pig);
    }

    @Transactional
    public void deleteAll() {
        orgRepo.deleteAll();
    }
}
