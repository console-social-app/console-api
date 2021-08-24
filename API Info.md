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




# Example Route
```
import express from 'express';

let tweets = [
  {
    id: '1',
    text: 'yoyoyoo 프로제트1!!',
    createdAt: Date.now().toString(),
    name: 'Moon',
    username: 'moon',
    url: '{add picture url}',
  },
  {
    id: '2',
    text: '안뇽!',
    createdAt: Date.now().toString(),
    name: 'Yechan',
    username: 'Yechan',
  },
];
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweeets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE /tweets/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;

```