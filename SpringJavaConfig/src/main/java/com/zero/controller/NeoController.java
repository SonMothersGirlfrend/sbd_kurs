package com.zero.controller;


import com.zero.OrgService;
import com.zero.model.Action;
import com.zero.model.Pig;
import com.zero.model.Reason;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/neo")
public class NeoController {

    @Autowired
    OrgService orgService;

    @RequestMapping(value = "/")
    public String home(){
        return "home";
    }

    @RequestMapping(value = "/save")
    public String save(@RequestParam(name = "apast", required = true) String actPast,
                       @RequestParam(name = "anow", required = true) String actNow,
                       @RequestParam(name = "reason", required = true) String reason,
                       @RequestParam(name = "pig", required = true) String pigName){
        Action past = new Action();
        past.setName(actPast);

        Action now = new Action();
        now.setName(actNow);

        Reason reas = new Reason();
        reas.setName(reason);

        List<Action> apasts = new ArrayList<Action>();
        apasts.add(past);

        List<Action> anows = new ArrayList<Action>();
        anows.add(now);

        List<Reason> reasons = new ArrayList<Reason>();
        reasons.add(reas);

        Pig pig = new Pig();
        pig.setName(pigName);

        pig.setActionsLast(apasts);
        pig.setActionsNow(anows);

        now.setReasons(reasons);

        orgService.saveOrg(pig);

        return "home";
    }

    @RequestMapping(value = "/delete.all")
    public String deleteAll(){
        orgService.deleteAll();
        return "home";
    }

    @RequestMapping(value = "/delete")
    public String delete(@RequestParam(name = "name", required = true) String pigName){
        List<Pig> pigs =orgService.readByName(pigName);

        for (Pig pig:pigs) {
            orgService.delete(pig);
        }
        return "home";
    }
}
