# Chuckles
 A RESTful API using the http module to get, post, and delete jokes.
 
#Getting Started
Clone the repo and type Javascript '''npm i'''
Include in your project using '''var Joke = require('./app.js').Joke;'''

#Using Chuckles

First create a new instance of Joke:
'''var app = new Joke();'''

To then get a joke:
'''app.get();'''

To post an original joke:
'''app.post('This is a terrible Joke');'''

To delete a bad joke:
'''app.delete('This is a terrible Joke');'''




