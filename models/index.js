const Location = require("./Location")
const Traveller = require("./Traveller")
const Trip = require("./Trip")

Location.hasMany(Trip);
Trip.belongsTo(Location);

Traveller.hasMany(Trip);
Trip.belongsTo(Traveller);

module.exports = {
    Location:Location,
    Traveller:Traveller,
    Trip:Trip,
}