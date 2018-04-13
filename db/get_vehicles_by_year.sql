SELECT vehicles.id, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id, users.name FROM vehicles
JOIN users on users.id = vehicles.owner_id
WHERE vehicles.year > 2000
ORDER BY year DESC