const express = require('express')
const path = require('path');
const http = require('http');
const router = express.Router();

var bodyParser = require('body-parser');


const api = require('./server/routes/api.js');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist/Hotel-Final-Project')));
app.use('/api', api);
module.exports = router;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/Hotel-Final-Project/index.html'));
});

const port = process.env.PORT || '8000';
app.set('port',port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on localhost:${port}`));





// app.listen(8000, () =>{
//     //--------Admin Login Locations--------
//     //Deletes admin login - post with uname in url
//     app.route('/api/admin/delete/:uname').post((req, res) => {
//         deleteAdminLogin(req.params['uname'], res);
//     })

//     //Adds admin login - post with uname and pword in url
//     app.route('/api/admin/add/:uname/:pword').post((req, res) => {
//         addAdminLogin(req.params['uname'], req.params['pword'], res)
//     })

//     //Updates admin login - post with uname and pword in url
//     app.route('/api/admin/update/:uname/:pword').post((req, res) =>{
//         updateAdminLogin(req.params['uname'], req.params['pword'], res)
//     })

//     //Get admin login - get with uname in url
//     app.route('/api/admin/:uname').get((req, res) => {
//         getAdminLogin(req.params['uname'], res);
//     })
//     //--------End of Admin Login Locations--------



//     //-------Reservation API Locations------
//     //Create reservation - post with form information in json format
//     app.route('/api/reservation').post((req, res) => {
//         createReservation(req.body, res);
//     })

//     //Update reservation - post with form information - based on phone number
//     app.route('/api/reservation/update/:id').post((req, res) => {
//         updateReservation(req.body, req.params['id'], res);
//     })

//     //Update reservation - post with form information - based on phone number
//     app.route('/api/reservation/delete/:id').post((req, res) => {
//         deleteReservation(req.params['id'], res);
//     })

//     //Get reservation - get with phone number in url
//     app.route('/api/reservation/:id').get((req, res) => {
//         getReservation(req.params['id'], res);
//     })
//     //-------End Reservation API Locations------


// });

// function sendGoodResponse(res){
//     res.sendStatus(200);
// }
// function sendBadResponse(res){
//     res.sendStatus(500);
// }

// function getReservation(id, response){
//     var client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         if(err){
//             sendBadResponse(response);
//             throw(err);
//         }
//         const collection = client.db("HotelReservationDB").collection("reservations");
//         var query = { _id: new mongo.ObjectId(id)};
//         collection.findOne(query, function(err, res){
//             if(err){
//                 sendBadResponse(response);
//                 throw(err);
//             }
//             console.log("Document Found");
//             client.close();
//             response.send(res);
//         });
//     });
// }

// function createReservation(body, response){
//     var client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         if(err){
//             sendBadResponse(response);
//             throw(err);
//         }
//         const collection = client.db("HotelReservationDB").collection("reservations");
//         collection.insertOne(body, function(err, res){
//             if(err){
//                 sendBadResponse(response);
//                 throw(err);
//             }
//             console.log("Document Added");
//             client.close();
//             response.send(res.ops[0]);
//         });
//     });
// }

// function deleteReservation(id, response){
//     var client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         if(err){
//             sendBadResponse(response);
//             throw(err);
//         }
//         const collection = client.db("HotelReservationDB").collection("reservations");
//         var query = { _id: new mongo.ObjectId(id)};
//         collection.deleteOne(query, function(err, res){
//             if(err){
//                 sendBadResponse(response);
//                 throw(err);
//             }
//             console.log("Document Deleted");
//             client.close();
//             sendGoodResponse(response);
//         });
//     });
// }

// function updateReservation(body, id, response){
//     var client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         if(err){
//             sendBadResponse(response);
//             throw(err);
//         }
//         const collection = client.db("HotelReservationDB").collection("reservations");
//         var query = { _id: new mongo.ObjectId(id)};
//         var newValues = { $set: body}
//         collection.updateOne(query, newValues, function(err, res){
//             if(err){
//                 sendBadResponse(response);
//                 throw(err);
//             }
//             console.log("Document Added");
//             client.close();
//             sendGoodResponse(response);
//         });
//     });
// }



// // --------ADMIN ACCOUNT METHODS--------
// //Should add an admin account to login to the HRA
// function addAdminLogin(uname, password, response){
//     var client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         if(err){
//             sendBadResponse(response);
//             throw(err);
//         }
//         const collection = client.db("HotelReservationDB").collection("adminLogin");
//         var doc = { gid: uname, pword: password};
//         collection.insertOne(doc, function(err, res){
//             if(err){
//                 sendBadResponse(response);
//                 throw(err);
//             }
//             console.log("Document Added");
//             client.close();
//             sendGoodResponse(response);
//         });
//     });

// }

// //Should delete an admin account for logging in to the HRA
// function deleteAdminLogin(uname, clientResponse){
//     var client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         if(err){
//             sendBadResponse(clientResponse)
//             throw err;
//         }
//         const collection = client.db("HotelReservationDB").collection("adminLogin");
//         var query = { gid: uname };
//         collection.deleteOne(query, function(err, obj){
//             if(err){
//                 sendBadResponse(clientResponse)
//                 throw err;
//             }
//             console.log(obj.deletedCount + " document(s) deleted");
//             client.close();
//             sendGoodResponse(clientResponse);
//         });
//     });
// }

// //Should update admin account for loggin in to the HRA
// function updateAdminLogin(uname, password, clientResponse){
//     var client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         if(err){
//             sendBadResponse(clientResponse)
//             throw err;
//         }
//         const collection = client.db("HotelReservationDB").collection("adminLogin");
//         var query = { gid: uname };
//         var newValues = { $set: {gid: uname, pword: password}}
//         collection.updateOne(query, newValues, function(err, obj){
//             if(err){
//                 sendBadResponse(clientResponse)
//                 throw err;
//             }
//             console.log("Document Updated");
//             client.close();
//             sendGoodResponse(clientResponse);
//         });
//     });
// }

// function getAdminLogin(uname, clientResponse){
//     var client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         if(err){
//             sendBadResponse(clientResponse)
//             throw err;
//         }
//         const collection = client.db("HotelReservationDB").collection("adminLogin");
//         var query = { gid: uname };
//         collection.findOne(query, function(err, res){
//             if(err){
//                 sendBadResponse(clientResponse)
//                 throw err;
//             }
//             console.log("Admin Login Found");
//             client.close();
//             clientResponse.send(res);
//         });
//     });
// }
// //--------END ADMIN ACCOUNT METHODS--------
