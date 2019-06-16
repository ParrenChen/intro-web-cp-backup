# WOWS ship info API Documentation
The WOWS ship info api provides information for various ships in the game World
of Warships, information from: http://wiki.wargaming.net/en/World_of_Warships

## Get a list of all ship's name in this service.
**Request Format:** info.php?ship=all

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** Return a list of all of the ships that you can look up in this API.

**Example Request:** info.php?ship=all

**Example Response:**
```
Shimakaze:shimakaze
Akizuki:akizuki
Asashio:asashio
Gearing:gearing
Fletcher:fletcher
Benson:benson
Grozovoi:grozovoi
...
```

**Error Handling:**
- If missing/invalid parameter, it will 400 error with a message:
                              'Missing required name parameter!'

## Lookup a specific ship's Information
**Request Format:** info.php?shipName={shipName}

**Request Type**: GET

**Returned Data Format**: JSON

**Description:** Given a specific ship name and returns the detailed information of the ship. The shipName parameters
is for the ship's name that is going to look for. A valid ship name does not contain any spaces and it capitalized the
first letter.The shipName parameter could be filled with all to get the all information of all the ships on the server.

**Example Request:** info.php?shipName=Akizuki

**Example Response:**
```json
{
  "name" : "Akizuki",
  "nation" : "IJN",
  "tier" : "VII",
  "type" : "destroyer"
}
```

**Error Handling:**
- If missing/invalid the ship name, it will 400 error with a message:
                              'Missing required name parameter!'
