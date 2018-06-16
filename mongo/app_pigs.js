import {MongoClient} from 'mongodb';

var url = 'mongodb://tropnikov:qwerty@159.89.102.121:27017/petr?authSource=admin';

MongoClient.connect(url, function(err, db){
  if (err) throw err;
  console.log("connected");
  db.createCollection("pigs", {
    validator: {
      $jsonSchema : {
        bsonType : "object",
        required : ["firstName",
                    "lastName",
                    "sex",
                    "birthDate",
                    "weight",
                    "height"
                  ],
        properties : {
          "firstName" : {
            "bsonType" : "string"
          },
          "lastName" : {
            "bsonType" : "string"
          },
          "sex" : {
            "enum" : ["m","f"]
          },
          birthDate : {
            "bsonType" : "string",
          },
          weight : {
            "bsonType" : "int",
            "minimum" : 1,
            "maximum" : 1500
          },
          height : {
            "bsonType" : "int",
            "minimum" : 20,
            "maximum" : 500
          },
          assets : {
            "bsonType" : "array",
            "required" : ["assetType",
                          "assetName",
                          "assetPrice"],
            properties : {
              "assetType" : {
                bsonType : "string"
              },
              "assetName" : {
                bsonType : "string"
              },
              "assetDescription" : {
                bsonType : "string"
              },
              "assetPrice" : {
                bsonType : "int",
                minimum : 1000
              }
            }
          }
        }
      }
    }
  }).then(() => db.close() );
});
