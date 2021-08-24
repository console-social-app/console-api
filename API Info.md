# API Design

## User Schema
```
JSON
{
  id: string,  // user(tweet) ID
  text: string,  // commenting text
  createdAt: Date, // Comment date
  name: string,  // User Name
  username: string,  // User nickname  
  url: string (optional) // User photo?
}
```

## `GET` /tweets
get all tweets

Response `200`
```

{
   [tweet, tweet ....] 
}
```

## `GET` /tweets?username=:username
get all tweets for user's username (nickname)

Response `200`
Plain text
```
{
   [tweet, tweet ....] 
}
```

## `GET` /tweets/:id
get tweet by id

Response `200`
```
{
   tweet
}
```


### `POST` /tweets

- creating new tweet

    Request 

    ```
    {
       text,
       name,
       username,
    	 url, (optinal)
    }
    ```

    Response `201`

    ```
    {
       tweet
    }
    ```

### `PUT` /tweets/:id

- updating tweet

    Request

    ```
    {
       text
    }
    ```

    Response `200`

    ```
    {
       tweet
    }
    ```    

### `DELETE` /tweets/:id

- updating tweet

    Response `204`