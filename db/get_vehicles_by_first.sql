SELECT vehicles.id, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id FROM vehicles
JOIN users on users.id = vehicles.owner_id
WHERE users.name LIKE concat($1::TEXT, '%')