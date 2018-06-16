import mongoose from 'mongoose';
import {pig_schema, pig_model} from './schemas/pig';
import {leaveDocument_schema, leaveDocument_model} from './schemas/leaveDocument';
import {leaveForm_schema, leaveForm_model} from './schemas/LeaveForm';
import {asset_schema, asset_model} from './schemas/assets';

var url = 'mongodb://tropnikov:qwerty@159.89.102.121:27017/petr?authSource=admin';

mongoose.connect(url);
var Pig = pig_model;
var LeaveForm = leaveForm_model;
var LeaveDocument = leaveDocument_model;
var Asset = asset_model;

var testAsset = new Asset({
  assetType : 'car',
  assetName : 'Bmw 123',
  assetDescription: 'Production date: 01.02.2007',
  assetPrice: 1000
});
var testPig = new Pig({
  firstName: 'Petr',
  lastName: 'Piglet',
  sex: 'male',
  birthDate: new Date(1999, 0, 10),
  weight: 30,
  height: 100,
  assets: [testAsset]
});

var testLeaveDocument = new LeaveDocument({
  documentType : 'Foreign passport',
  documentId : 123456789,
  issueDate : new Date(2001, 3, 2),
  validDate : new Date(2020, 0, 1),
  issuedBy : 'Someone'
});
var testLeaveForm = new LeaveForm({
  pigId : '5b08964ss878e7ab3324599b2d',
  home_address : 'Saint Petersburg, Kronverskiy pr., 49',
  leaveDocument : testLeaveDocument,
  phone_number : '123-321-1234',
  stay_country : 'Moon',
  profession : 'Programmer',
  leave_reasons : 'Bad life level'
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  testLeaveForm.save(function(err){
    if (err) return console.error(err);
    console.log("Leave Form created");
  });
});
