SELECT * FROM episodes
WHERE series ilike $1
ORDER BY episode_id;