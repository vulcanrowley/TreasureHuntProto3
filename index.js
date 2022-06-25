// index.js

/**
 * Required External Modules
 */
 const crypto = require("crypto");
 const express = require("express");
 const path = require("path");
 


/**
 * App Variables
 */
 const app = express();
 var server = require("http").Server(app);
 const socketio = require("socket.io");
 const io = socketio(server);

 const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

 //app.set("views", path.join(__dirname, "views"));// might not be needed
 app.set("view engine", "pug");
 //set static file lookup to views directory  NO NO 
 app.use(express.static(path.join(__dirname, 'public')));

 /**
  * Phaser specific setup
  */
 const n = crypto.randomInt(0, 1000000);
 const verificationCode = n.toString().padStart(6, "0");
 //console.log("Scene Code",verificationCode);
/**
 * Routes Definitions
 */
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

 //app.get('/', (req, res) => {
 //   res.render('index', { SceneCode: verificationCode})
 // })

/**
 * Game Server side socket io
 */

 io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

/**
 * Server Activation
 */

 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });