const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive({
  connectionString: 'postgres://culfjdel:sSihITIjEdWKYd3QXNle2CsmLnwsZWku@baasu.db.elephantsql.com:5432/culfjdel?ssl=true'
}).then( db => {
  app.set('db', db);

  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })

})


// ===== Build enpoints below ============
app.get('/api/users', mainCtrl.getUsers);
app.get('/api/vehicles', mainCtrl.getVehicles);
app.get('/api/user/:userID/vehiclecount', mainCtrl.getVehicleCountByOwner);
app.get('/api/user/:userID/vehicle', mainCtrl.getVehiclesByOwner);
app.get('/api/vehicle', mainCtrl.getVehiclesByQuery);
app.get('/api/newervehiclesbyyear', mainCtrl.getVehiclesByYear);
app.put('/api/vehicle/:vehicleID/user/:userID', mainCtrl.updateVehicleOwner);
app.delete('/api/user/:userID/vehicle/:vehicleID', mainCtrl.deleteVehicleOwner);
app.delete('/api/vehicle/:vehicleID', mainCtrl.deleteVehicle);
app.post('/api/users', mainCtrl.addUser);
app.post('/api/vehicles', mainCtrl.addVehicle);



// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
