SELECT * FROM characters
WHERE name LIKE $1
ORDER BY char_id;