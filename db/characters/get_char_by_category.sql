SELECT * FROM characters
WHERE category ilike $1
ORDER BY char_id;