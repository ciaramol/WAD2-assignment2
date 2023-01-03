# Assignment 2 - Web API.
​
Name: Ciara Molloy
​
## Features.
​
 + Some calls routed through new API, not TV Shows
​
 + Top rated movies added to API
​
## Installation Requirements
(Note: Untested)
​
Clone the repo and open in Visual Studio Code

Navigate to movies-api
```bat
cd movies-api
```
​Run the following commands
```bat
npm install --save-dev babel-cli babel-preset-env nodemon eslint babel-eslint
```
(Accept default values)
```bat
npm install --save dotenv express
npm install --save uniqid
npm install -save mongoose
npm install express-async-handler --save
npm install --save express-session
npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs
```

Install Mongodb and run the following command in the root directory
```bat
mongod -dbpath db
```

Then navigate to reactApp
```bat
cd ../reactApp
```
And run the following commands
```bat
npm install
npm start
```
Navigate to movies-api
```bat
cd ../movies-api
npm start
```
​
## API Configuration
In movies-api, your .env file should look like this:
​
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET= <YourJWTSecret>
TMDB_KEY=<YourTMDBKey>
```

In reactApp, your .env file should look like this:
```bat
TMDB_KEY=<YourTMDBKey>
FAST_REFRESH=false
```
​
## API Design
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/tmdb/topRatedMovies | Gets a list of top rated movies | N/A | N/A | N/A
| /api/tmdb/upcomingMovies | Gets a list of top rated movies | N/A | N/A | N/A
| /api/users | Gets users | Logs in | N/A | N/A
| /api/users?action=register| N/a | Registers a new user | N/A | N/A

​
​
## Security and Authentication
Only the favourites route is protected. It requires a valid login to view.
​
## Integrating with React App
​
React App: https://github.com/ciaramol/WAD2-Assignment1

Example API call:​
~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
​
~~~
​
## Extra features
​
N/A
​
## Independent learning.
​
N/A