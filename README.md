# Breaking Bad API

## Documentation

Welcome to the Breaking Bad API! This documentation should supply
with you all the information you need to start making your HTTP
requests. Give our documentation a read before you get started on
your project, and don't forget about the ice trays!

## Base URL
http://www.breakingbadapi.com/api/

## Rate Limit
This API is free, I have no intention of creating authentication. However, to prevent harmful activity, there is a rate limit of 10,000 requests a day. If you happen to reach that limit, you will receive a 429 status code, and regain access after 24 hours.

## Character Endpoints

#### Character Attributes

| Attribute   | Type          | Description  |
| ----------- |:-------------:| ------------ |
| id          | integer       | Unique Id per character |
| name        | string        | A character's full name |
| birthday    | string        | A character's birthday  |
| occupation  | array         | List of character's known occupation    |
| img         | string        | Character's image (as jpg)   |
| status      | string        | Are they alive(or did Heisenberg get to them??)    |
| nickname    | string        | A known nickname they are refered as     |
| appearance  | array         | List of seasons that the character appeared in    |

#### Get all characters
Endpoint to retrieve information from all characters.
```
/api/characters
```

#### Get single character
```
/api/characters/1
```

#### Get a random character
```
/api/character/random
```

#### Get paginated characters
```
/api/characters?limit=10&offset=10
```
This request would give you an array of 10 characters, starting at index 10 (the 11th id).

#### Get paginated characters
```
/api/characters?limit=10&offset=10
```

#### Get specific character by name 
```
/api/characters?name=Walter+White
```
Notice the 'plus sign' between the first and last name represents a space. This query only works with the full name of a character. Double check your spelling!

## Episode Endpoints

#### Episode Attributes

| Attribute   | Type          | Description  |
| ----------- |:-------------:| ------------ |
| id          | integer       | Unique Id per episode |
| title       | string        | The title of the episode |
| season      | integer       | The season that the episode belongs to |
| episode     | integer       | The episode number of it's season   |
| air_date    | string        | The original air date of the episode   |
| characters  | array         | Main characters that are associated with the episode   |

#### Get all episodes
```
/api/episodes
```

#### Get an episode by id
```
/api/episodes/id
```

## Quote Endpoints

#### Quote Attributes

| Attribute   | Type          | Description  |
| ----------- |:-------------:| ------------ |
| id          | integer       | Unique Id per quote |
| quote       | string        | The quote itself |
| author      | string        | The originator of the quote |

#### Get all quotes
```
/api/quotes
```

#### Get quote by id
```
/api/quotes/id
```

#### Get a random quote
```
/api/quote/random
```

#### Get quote by author
```
/api/quote?author=Jesse+Pinkman
```
This endpoint allows you to accept all quotes from a specific author. Make sure to separate the first and last name with a 'plus sign'. Like the character query, you have to use the author's full name.

## Death Endpoints

#### Death Attributes

| Attribute         | Type          | Description  |
| ----------------- |:-------------:| ------------ |
| id                | integer       | Unique Id per death |
| death             | string        | The name of the deceased individual |
| cause             | string        | How the character met their demise  |
| responsible       | string        | The person(s) responsible or affiliated with their death   |
| last words        | string        | The famous last words   |
| season            | integer       | The season the death occured in    |
| episode           | integer       | The episode of the season     |
| number_of_deaths  | integer       | The number of deaths that occured for this instance    |

#### Get all death information
```
/api/deaths
```

#### Get death count
```
/api/death-count
```

#### Get death count by name
```
/api/death-count?name=Gustavo+Fring
```
Be aware, not just any name will work. They have to have caused, or been affiliated with the death in some capacity. Don't forget about the 'plus sign' between the first and last name!

#### Get random death information about an individual
```
/api/random-death
```


BSD LISENCE ...<a href='https://github.com/timbiles/Breaking-Bad--API/blob/master/LICENSE.rst'>BSD</a>
