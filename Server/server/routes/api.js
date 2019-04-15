const express = require('express');
const router = express.Router();
const uri = "mongodb+srv://goose1jd:YOcHdeKC6o0nFuy7@cluster0-w96lf.mongodb.net/test?retryWrites=true";
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;



module.exports = router;


//--------Admin Login Locations--------
//Deletes admin login - post with uname in url
router.post('/admin/delete/:uname', (req, res) => {
  deleteAdminLogin(req.params['uname'], res);
})


//Get admin login - get with uname in url
router.get('/admin/:uname', (req, res) => {
  getAdminLogin(req.params['uname'], res);
})
//--------End of Admin Login Locations--------

//Adds admin login - post with uname and pword in url
router.post('/admin/add/:uname/:pword',(req, res) => {
  addAdminLogin(req.params['uname'], req.params['pword'], res)
})

//Updates admin login - post with uname and pword in url
router.post('/admin/update/:uname/:pword',(req, res) => {
  updateAdminLogin(req.params['uname'], req.params['pword'], res)
})

//-------Reservation API Locations------
//Create reservation - post with form information in json format
router.post('/reservation',(req, res) => {
  createReservation(req.body, res);
})

//Update reservation - post with form information - based on phone number
router.post('/reservation/update/:id',(req, res) => {
  updateReservation(req.body, req.params['id'], res);
})

//Update reservation - post with form information - based on phone number
router.post('/reservation/delete/:id',(req, res) => {
  deleteReservation(req.params['id'], res);
})

//Get reservation - get with phone number in url
router.get('/reservation/:id',(req, res) => {
  getReservation(req.params['id'], res);
})
//-------End Reservation API Locations------

function sendGoodResponse(res) {
  res.sendStatus(200);
}
function sendBadResponse(res) {
  res.sendStatus(500);
}

function getReservation(id, response) {
  var client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      sendBadResponse(response);
      throw (err);
    }
    const collection = client.db("HotelReservationDB").collection("reservations");
    var query = { _id: new mongo.ObjectId(id) };
    collection.findOne(query, function (err, res) {
      if (err) {
        sendBadResponse(response);
        throw (err);
      }
      console.log("Document Found");
      client.close();
      response.send(res);
    });
  });
}

function createReservation(body, response) {
  var client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      sendBadResponse(response);
      throw (err);
    }
    const collection = client.db("HotelReservationDB").collection("reservations");
    collection.insertOne(body, function (err, res) {
      if (err) {
        sendBadResponse(response);
        throw (err);
      }
      console.log("Document Added");
      client.close();
      response.send(res.ops[0]);
    });
  });
}

function deleteReservation(id, response) {
  var client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      sendBadResponse(response);
      throw (err);
    }
    const collection = client.db("HotelReservationDB").collection("reservations");
    var query = { _id: new mongo.ObjectId(id) };
    collection.deleteOne(query, function (err, res) {
      if (err) {
        sendBadResponse(response);
        throw (err);
      }
      console.log("Document Deleted");
      client.close();
      sendGoodResponse(response);
    });
  });
}

function updateReservation(body, id, response) {
  var client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      sendBadResponse(response);
      throw (err);
    }
    const collection = client.db("HotelReservationDB").collection("reservations");
    var query = { _id: new mongo.ObjectId(id) };
    var newValues = { $set: body }
    collection.updateOne(query, newValues, function (err, res) {
      if (err) {
        sendBadResponse(response);
        throw (err);
      }
      console.log("Document Added");
      client.close();
      sendGoodResponse(response);
    });
  });
}



// --------ADMIN ACCOUNT METHODS--------
//Should add an admin account to login to the HRA
function addAdminLogin(uname, password, response) {
  var client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      sendBadResponse(response);
      throw (err);
    }
    const collection = client.db("HotelReservationDB").collection("adminLogin");
    var doc = { gid: uname, pword: password };
    collection.insertOne(doc, function (err, res) {
      if (err) {
        sendBadResponse(response);
        throw (err);
      }
      console.log("Document Added");
      client.close();
      sendGoodResponse(response);
    });
  });

}

//Should delete an admin account for logging in to the HRA
function deleteAdminLogin(uname, clientResponse) {
  var client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      sendBadResponse(clientResponse)
      throw err;
    }
    const collection = client.db("HotelReservationDB").collection("adminLogin");
    var query = { gid: uname };
    collection.deleteOne(query, function (err, obj) {
      if (err) {
        sendBadResponse(clientResponse)
        throw err;
      }
      console.log(obj.deletedCount + " document(s) deleted");
      client.close();
      sendGoodResponse(clientResponse);
    });
  });
}

//Should update admin account for loggin in to the HRA
function updateAdminLogin(uname, password, clientResponse) {
  var client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      sendBadResponse(clientResponse)
      throw err;
    }
    const collection = client.db("HotelReservationDB").collection("adminLogin");
    var query = { gid: uname };
    var newValues = { $set: { gid: uname, pword: password } }
    collection.updateOne(query, newValues, function (err, obj) {
      if (err) {
        sendBadResponse(clientResponse)
        throw err;
      }
      console.log("Document Updated");
      client.close();
      sendGoodResponse(clientResponse);
    });
  });
}

function getAdminLogin(uname, clientResponse) {
  var client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if (err) {
      sendBadResponse(clientResponse)
      throw err;
    }
    const collection = client.db("HotelReservationDB").collection("adminLogin");
    var query = { gid: uname };
    collection.findOne(query, function (err, res) {
      if (err) {
        sendBadResponse(clientResponse)
        throw err;
      }
      console.log("Admin Login Found");
      client.close();
      clientResponse.send(res);
    });
  });
}
//--------END ADMIN ACCOUNT METHODS--------
