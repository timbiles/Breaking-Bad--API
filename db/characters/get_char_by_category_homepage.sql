SELECT * FROM characters
WHERE category ilike $1
ORDER BY random()
LIMIT $2;