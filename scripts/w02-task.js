/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required *

/* Step 2 - Variables */

const fullname = " Kelvin Zhou";
let currentYear = new Date().getFullYear()
const profilePicture = "images/Myimage.jpeg" ; 




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('#home picture img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullname}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture );


imageElement.setAttribute('alt', fullname);


/* Step 5 - Array */

var favFoods = ["sadza", "pizaa", "burgers"];

foodElement.innerHTML = favFoods;

const singleFavFood = "rice";

favFoods.push(singleFavFood);

foodElement.innerHTML +=  '<br>' + favFoods;

favFoods.shift();

foodElement.innerHTML +=  '<br>' + favFoods;

favFoods.pop();

foodElement.innerHTML +=  '<br>' + favFoods;