module.exports = {
    getUsers: (req, res, next) => {
        let db = req.app.get('db');

        db.get_users()
        .then(users => res.status(200).send(users))
        .catch(() => res.status(500).send());
    },
    getVehicles:(req, res, next) => {
        let db = req.app.get('db');

        db.get_vehicles()
        .then(vehicles => res.status(200).send(vehicles))
        .catch(() => res.status(500).send());
    },
    addUser:(req, res, next) => {
        let db = req.app.get('db');
        let { name, email } = req.body;

        db.add_user([name, email])
        .then(users => res.status(200).send(users))
        .catch(() => res.status(500).send());
    },
    addVehicle:(req, res, next) => {
        let db = req.app.get('db');
        let {make, model, year, owner_id} = req.body;

        db.add_vehicle([make, model, year, owner_id])
        .then(vehicles => res.status(200).send(vehicles))
        .catch(() => res.status(500).send());
    },
    getVehicleCountByOwner:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.get_vehicle_count_by_owner([params.userID])
        .then(count => res.status(200).send(count))
        .catch(() => res.status(500).send());
    },
    getVehiclesByOwner:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.get_vehicles_by_owner([params.userID])
        .then(vehicles => res.status(200).send(vehicles))
        .catch(() => res.status(500).send());
    },
    getVehiclesByQuery:(req, res, next) => {
        let db = req.app.get('db');
        let {query} = req;
        if(query.userEmail) {
            db.get_vehicles_by_email([query.userEmail])
            .then(vehicles => res.status(200).send(vehicles))
            .catch(() => res.status(500).send());
        }
        else if(query.userFirstStart) {
             db.get_vehicles_by_first([query.userFirstStart])
            .then(vehicles => res.status(200).send(vehicles))
            .catch(() => res.status(500).send());           
        }
    },
    getVehiclesByYear:(req, res, next) => {
        let db = req.app.get('db');

        db.get_vehicles_by_year()
        .then(vehicles => res.status(200).send(vehicles))
        .catch(() => res.status(500).send());
    },
    updateVehicleOwner:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.update_vehicle_owner([params.userID, params.vehicleID])
        .then(vehicle => res.status(200).send(vehicle))
        .catch(() => res.status(500).send());
    },
    deleteVehicleOwner:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.delete_vehicle_owner([params.vehicleID])
        .then(vehicle => res.status(200).send(vehicle))
        .catch(() => res.status(500).send());
    },
    deleteVehicle:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.delete_vehicle([params.vehicleID])
        .then(vehicle => res.status(200).send(vehicle))
        .catch(() => res.status(500).send());
    }
}
