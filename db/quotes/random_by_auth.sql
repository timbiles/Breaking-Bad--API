SELECT * FROM quotes
WHERE author = $1
ORDER BY random()
LIMIT 1;