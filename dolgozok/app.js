import express from 'express';
import routesDolgozo from './routes/routesDolgozo.js';
import routesSzabadsag from './routes/routesSzabadsag.js';
import sequelize from './conn/db.js';
import "./models/dolgozo.js";
import "./models/szabadsag.js"; 
import "./models/assoc.js"; 


const app = express();
const PORT = 3000;

app.use(express.json());

app.use( '/api', routesDolgozo );
app.use( '/api', routesSzabadsag );

sequelize.sync({ alter: true })
    .then(() => console.log("Database schema synchronized"))
    .catch((err) => console.error("Error synchronizing schema: ", err.message));

sequelize.sync()
.then( () => {
    app.listen( PORT, () => {
        console.log( `Server is running on port ${PORT}` );
    });
})
.catch( err => console.log( err ));

