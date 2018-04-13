INSERT INTO users (name, email) 
Values ($1, $2)
returning *