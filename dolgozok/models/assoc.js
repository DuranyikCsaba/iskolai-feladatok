import Dolgozo from "./dolgozo.js";
import Szabadsag from "./szabadsag.js";

Dolgozo.hasMany(Szabadsag, { foreignKey: 'dolgozo_id' });
Szabadsag.belongsTo(Dolgozo, { foreignKey: 'dolgozo_id' });
