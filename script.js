
let adjective1 = prompt("Enter an adjective.");
let adjective2 = prompt("Enter an band name.");
let friend = prompt("Enter the name of a friend");
let adjective3 = prompt("Enter an adjective.");
let adjective4 = prompt("Enter a adjective.");
let sweatshirt = prompt("Enter a type of shirt");
let adjective5 = prompt("Enter an adjective.");
let verb = prompt("Enter a verb" );

let story = 
`On a dark and ${adjective1} friday night, I decided to go hang out with some friends.
 I put on my favorite shirt, which was a ${adjective2} shirt that looked ${adjective3}.
 My friend, ${friend}, dressed up in a ${adjective4} ${sweatshirt}. We went to our friend Dan's house and sat by the fire
 pit in his backyard, then we heard a(n) ${adjective5} noise. Luca went over to investigate, then sudenly, something ${verb} him 
 and he was taken into the darkness. we never did see luca again. `;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;