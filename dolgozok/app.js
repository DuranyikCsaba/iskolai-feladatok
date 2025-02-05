import express from 'express';
import routes from './routes/routesDolgozo.js';
import sequelize from './conn/db.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use( '/api', routes );

sequelize.sync()
.then( () => {
    app.listen( PORT, () => {
        console.log( `Server is running on port ${PORT}` );
    });
})
.catch( err => console.log( err ));

