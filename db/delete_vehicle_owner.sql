UPDATE vehicles set owner_id = NULL
WHERE id = $1
returning *