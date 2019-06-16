# wows ships API Documentation
The WOWS ship info api provides information for various ships in the game World
of Warships, information from: http://wiki.wargaming.net/en/World_of_Warships

## look up all the ships information
**Request Format:** info.php?shipType=all

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns all the ships information in the database.


**Example Request:** info.php?shipType=all

**Example Response:**

```json
    {
        "id": "1",
        "shipName": "Shimakaze",
        "nation": "IJN",
        "tier": "10",
        "type": "destroyer"
    },
    {
        "id": "2",
        "shipName": "Akizuki",
        "nation": "IJN",
        "tier": "8",
        "type": "destroyer"
    }, ...
```

**Error Handling:**
- If missing/invalid parameter, it will 400 error with a message:
                              'Missing/Wrong required type parameter!'
- If cannot reach database, it will 503 error with a message:
                    'Can not connect to the database. Please try again later.'

## look up information for a specific ship type
**Request Format:** info.php?shipType={shipType}

**Request Type**: GET

**Returned Data Format**: JSON

**Description:** Given a specific ship type and returns all the information of the
given type. The shipType is required to be one of the following: destroyer, cruiser,
battleship, aircaft_carrier.

**Example Request:** info.php?shipType=battleship

**Example Response:**

```json
    {
        "id": "11",
        "shipName": "Yamato",
        "nation": "IJN",
        "tier": "10",
        "type": "battleship"
    },
    {
        "id": "12",
        "shipName": "Montana",
        "nation": "USN",
        "tier": "10",
        "type": "battleship"
    }

```

**Error Handling:**
- If invalid parameter, it will 400 error with a message:
                                  "Wrong ship type entered!"
- If cannot reach database, it will 503 error with a message:
                      'Can not connect to the database. Please try again later.'
