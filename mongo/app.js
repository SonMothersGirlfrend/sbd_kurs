import express from 'express';
import {pig_schema, pig_model} from './schemas/pig';
import {assets_schema, assets_model} from './schemas/assets';
import {leaveDocument_schema, leaveDocument_model} from './schemas/leaveDocument';
import {leaveForm_schema, leaveForm_model} from './schemas/leaveForm';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


var url = 'mongodb://tropnikov:qwerty@159.89.102.121:27017/petr?authSource=admin';
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err);
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});

var Pig = pig_model;

var app = express();
app.use(bodyParser.json());
app.get('/api', function (req, res) {
    res.send('API is running');
});

app.get('/api/pigs', function(req, res) {
    return pig_model.find(function (err, pigs){
      if (!err){
        return res.send(pigs);
      }else{
        res.statusCode = 500;
        log.error('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
});
app.post('/api/pigs', function(req, res) {
    var newPig = new Pig({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      weight: req.body.weight,
      height: req.body.height})
    newPig.save(function(err) {
      if(err){
        console.log(err);
        res.statusCode = 400;
        return res.send({error: 'Bad request' });
      }else {
        res.statusCode = 200;
        return res.send('New pig created!');
      }
    })
});
app.delete('/api/pigs', function(req, res){
  pig_model.deleteOne({
    _id : req.body._id
  }, function(err) {
    if(err){
      console.log(err);
      res.statusCode = 400;
      return res.send({error: 'Bad request' });
    }else {
      res.statusCode = 200;
      return res.send('Pig deleted!');
    }
  });
});

app.put('/api/pigs', function (req,res) {
  console.log(req.body._id);
  var nibody = JSON.parse(JSON.stringify(req.body));
  delete nibody._id
  console.log(nibody);
  console.log(req.body._id);
  pig_model.findByIdAndUpdate(
    req.body._id,
    {$set: nibody},, function(err, result){
    if (err){
      console.log(err);
      res.statusCode = 400;
      return res.send({error: 'Bad request' });
    }else {
      console.log(result);
        res.statusCode = 200;
        return res.send(result);
    }
  })
});

app.listen(25565, function () {
  console.log("stared at 25565");
});
