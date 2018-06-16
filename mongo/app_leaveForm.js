import {MongoClient} from 'mongodb';

var url = 'mongodb://tropnikov:qwerty@159.89.102.121:27017/petr?authSource=admin';

MongoClient.connect(url, function(err, db){
  if (err) throw err;
  console.log("connected");
  db.createCollection("leaveForm", {
    validator: {
      $jsonSchema : {
        bsonType : "object",
        required : ["pig_id",
                    "leave_document",
                    "home_address",
                    "phone_number",
                    "stay_country",
                    "profession",
                    "leave_reasons"
                  ],
        properties : {
          "pig_id" : {
            "bsonType" : "string"
          },
          "leave_document" : {
            "bsonType" : "array",
            required : ["documentType",
                        "documentId",
                        "issueDate",
                        "validDate",
                        "issuedBy"],
            properties: {
              "documentType":{
                bsonType : "string",
              },
              documentId : {
                bsonType: "string",
              },
              issueYear : {
                bsonType : "date",
                maximum: Date.now()
              },
              validDate: {
                bsonType : "date",
                minimum : Date.now()
              },
              issuedBy: {
                bsonType:  "string"
              }
            }
          },
          home_address: {
            bsonType: "string"
          },
          phone_number: {
             bsonType: "string"
          },
          stay_country: {
             bsonType: "string"
          },
          profession: {
             bsonType: "string"
          },
          leave_reasons: {
             bsonType: "string"
          }
        }
      }
    }
  }).then(() => db.close() );
});
