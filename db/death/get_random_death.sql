-- SELECT * FROM deaths
-- ORDER BY random()
-- LIMIT 1;

SELECT * FROM deaths as d 
JOIN characters as c
ON d.death = c.name
ORDER BY random()
LIMIT 1;