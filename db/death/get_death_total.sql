SELECT sum(number_of_deaths) FROM deaths
WHERE responsible LIKE $1;