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

### Character Attributes

| Attribute   | Type          | Description  |
| ----------- |:-------------:| ------------ |
| id          | integer       | Unique Id per character |
| name        | string        | A character's full name |
| birthday    | string        | A character's birthday  |
| occupation  | array         | List of character's known occupation    |
| img         | string        | Character's image (as jpg)   |
| status      | string        | Are they alive(or did Heisenberg get to them??)    |
| nicknamd    | string        | A known nickname they are refered as     |
| appearance  | array         | ist of seasons that the character appeared in    |

### Get all characters
Endpoint to retrieve information from all characters.
```
/api/characters
```

### Get single character
```
/api/characters/1
```

### Get a random character
```
/api/character/random
```

### Get paginated characters
```
/api/characters?limit=10&offset=10
```
This request would give you an array of 10 characters, starting at index 10 (the 11th id).

### Get paginated characters
```
/api/characters?limit=10&offset=10
```

### Get specific character by name 
```
/api/characters?name=Walter+White
```
Notice the 'plus sign' between the first and last name represents a space. This query only works with the full name of a character. Double check your spelling!

## Episode Endpoints

## Quote Endpoints

## Death Endpoints



BSD LISENCE ...<a href='https://github.com/timbiles/Breaking-Bad--API/blob/master/LICENSE.rst'>BSD</a>
