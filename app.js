var ServeLaff = require('./server.js').ServeLaff;

var Joke = function() {

var jokes = ["I'm sick of having to go to two different huts to buy pizza and sunglasses. -@Leemanish", 
"If you think eggplant is good, you should try any other food; it's much better - @jakeandamir", 
"Triscuit is the perfect combination of cracker and doormat. -@1CarParade", 
"Cliff Bars answer the question, 'What if it wasn't frowned upon to eat an entire sleeve of mushed-up oatmeal cookies before noon? -@Julie Klausner", 
"How can you ever be late for anything in London? They have a huge clock right in the middle of the town. -Jimmy Kimmel", 
"I think a lot of the conflict that has happened in the Wild Wild West could've been avoided had architechts in those days just made their towns big enough for everyone. -seen on reddit.com", 
"So what if I can't spell Armageddon? It's not the end of the world. -Stewart Francis", 
"Pickup artists and garbagemen should switch names -@ceejoyner", 
"We need a 12-step group for compulsive talkers. They could call it On Anon Anon. - Paula Poundstone", 
"Does it disturb anyone else that 'The Los Angeles Angels' baseball team translates directly to 'The The Angels Angels'? -Neil DeGrasse Tyson", 
"A sign said, 'Do not allow your dog to chase, injure, or worry wildlife.' How is a dog going to 'worry' wildlife? Run up to a bird: 'Hey, I think you've got something on your beak. It could be a tumor. -Andy Kindler", 
"Just because you can't dance doesn't mean you shouldn't dance. - Alcohol (@yoyoha)", 
"My girlfriend told me to take a spider out instead of killing it. We went and had some drinks. Cool guy. Wants to be a lawyer. -@FattMernandez", 
"Don't worry, I'll hold your stuff. You just worrk about making friends.' -Cargo Shorts (@DearAnyone)", 
"The biggest change after having kids was putting a swear jar in the house. Whenever I say a bad word, I have to put a dollar in the jar, and at the end of every month, I take all that money and buy myself a nice steak for being such a cool dad. -Mark Chalifoux", 
"What do you mean I didn't win? I ate more wet T-shirts than anyone else. -@PeachCoffin", 
"Just found the worst page in the entire dictionary. What I saw was disgraceful, disgusting, dishonest, and disingenuous. -@sixthformpoet", 
"I admit that I live in the past, but only because housing is so much cheaper. -Matt Wohlfarth", 
"Nostalgia: How long's that been around? -Bill Bailey", 
"Where there's a will, there's a relative. -Ricky Gervais",  
"A penny saved is a penny that will sit around in a jar for five years. -@Keatingthomas", 
"I put my root beer in a square glass. Now it's just a beer. -Reader's Digest", 
"Old programmers never die; they just lose some of their functions. -Reader's Digest",
"I hide photos on my computer of me petting animals at the zoo in a file named 'fireworks and vacuums' so my dog won't find them. -@EliTerry"];

var singleJoke = jokes[Math.floor(Math.random()*jokes.length-1)];

	this.get = function() {
		ServeLaff(singleJoke);	
		ServeLaff.listen('server listening...checkout localhost:3000/joke for a chuckle', 3000);
	};	

	this.post = function(newJoke) {
		jokes.push(newJoke);
		ServeLaff(newJoke);
		ServeLaff.listen('server listening...your sweet joke has been posted, view it at localhost:8080/joke', 8080);
	};

	this.delete = function(badJoke) {
		ServeLaff(singleJoke);
		ServeLaff.listen('server listening...your bad joke has been deleted, view a fresh joke at localhost:8000/joke', 8000);
	};

};

module.exports.Joke = Joke;

