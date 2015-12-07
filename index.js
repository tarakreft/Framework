var Joke = require('./app.js').Joke;

var app = new Joke();

app.get();
app.post("badJokeHere2");
app.delete("badJokeHere2");


