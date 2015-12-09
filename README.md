# Chuckles
 A RESTful API using the http module to get, post, and delete jokes.
 
#Getting Started
Clone the repo and type:

```javascript
npm i
```
Include in your project using:
```javascript
var Joke = require('./app.js').Joke;
```

#Using Chuckles

First create a new instance of Joke:
```javascript
var app = new Joke();
```

To then get a joke:
```javascript
app.get();
```

To post an original joke:
```javascript
app.post('This is a terrible Joke');
```

To delete a bad joke:
```javascript
app.delete('This is a terrible Joke');
```





