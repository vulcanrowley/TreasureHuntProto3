Nth attempt to use, Phaser, Express and SocketIO together
This config seems to work without needing Parcel or any other traspiler.
Not sure where the inspiration for this code set came from

Design: NPM kicks off the Exchange server which launches the client when a users signs in
The Dungeon is generated in the client from a random setting - 'dungeonCode' - assigned in the server
The clients collect user actions and send over socketio to the server, the server computes moves and returns to the clients who then repaint the client browser.[later add movement interpolation]
Changes:
Need to use pug too dynamically set seed for Dungeon to all clients
Problems using modules lead to putting all the code in one giant pug file (ugh!)
Will revist using template string interpolation after verifiyng socketIO works
