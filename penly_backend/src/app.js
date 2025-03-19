import express from express;
import db from './db.js'
import productRoutes from './routers/Product.router.js'

const app = express();
const PORT = 3318;
app.use(express.json());
app.use('/api/v0.1/', productRoutes)

db.authenticate()
    .then(() => {
        console.log('Az adatbázis kapcsolat sikeresen létrejött');

        return db.sync({ alter: true })
            .then(() => {
                console.log("A modellek szinkronizációja sikeres!");
                app.listen(PORT, () => {
                    console.log(`A szerver elindult a http://localhost:${PORT} URL-en!`);
                });
            })
            .catch((error) => {
                console.error("Hiba a szinkronizáció során");
                console.error(error);
            });
    })
    .catch((error) => {
        console.error('Az adatbázis kapcsolat nem tudott létrejönni: ', error);
    });



