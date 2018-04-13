UPDATE vehicles set owner_id = $1
WHERE vehicles.id = $2
returning *
