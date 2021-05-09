import express from "express";
import path from "path";
const app = express();
const port = 3124; // default port to listen
const hostname = "127.0.0.1";

app.use("/lobby", express.static(path.join(__dirname, 'public')));
// define a route handler for the default home page
app.get( "/lobby", ( req, res ) => {
    res.sendFile( __dirname + "/views/lobby.html" );
} );

// start the Express server
app.listen( port, hostname, () => {
    // tslint:disable-next-line:no-console
    console.log(`${path.join(__dirname, 'public')}    server started at http://${hostname}:${port}`);
} );