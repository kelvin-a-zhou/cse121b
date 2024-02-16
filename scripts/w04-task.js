/* LESSON 3 - Programming Tasks */

/* Profile Object  */
var myProfile = {};
myProfile.name = "Kelvin Zhou";
myProfile.photo = "images/Myimage.jpeg";
myProfile.favoriteFoods = ["Pizza", "Rice", "Sadza"];
myProfile.hobbies = ["Reading", "Writing", "Playing Football"];
myProfile.placesLived = [];





/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: "Capetown",length: "2 years"});
myProfile.placesLived.push({place: "Bulawayo",length: "5 years"});
myProfile.placesLived.push({place: "Joburg",length: "1 years"});


/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").innerHTML = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
/*var favoriteFoodList = querySelector("#favorite-foods")*/

let favoriteFoodul = document.querySelector("#favorite-foods"); //current list on website which is empty (<ul id="favorite-foods"></ul>)
myProfile.favoriteFoods.forEach(function(food){         //repeat until the end of list of favourite foods
    let ListItem = document.createElement("li");        // create new list item (going to be empty) <li> </li>
    ListItem.textContent = food;                        // set list item value to current list item(each food)
    favoriteFoodul.append(ListItem);               // <ul> <li> food 1</li> <li> food2</li> <li> </li> </ul>
})



/* Hobbies List */ 
myProfile.hobbies.forEach(function(hobby){         //repeat until the end of list of favourite foods
    let Li = document.createElement("li");        // create new list item (going to be empty) <li> </li>
    Li.textContent = hobby;                        // adding each hobby to the Li item.
    document.querySelector("#hobbies").append(Li);               // <ul> <li> food 1</li> <li> food2</li> <li> </li> </ul>
})

/* Places Lived DataList */

myProfile.placesLived.forEach(function(placeLived){         //repeat until the end of list of favourite foods
    let dt = document.createElement("dt");        // create new list item (going to be empty) <li> </li>
    dt.textContent = placeLived.place;                        // adding each hobby to the Li item.

    let dd = document.createElement("dd");        // create new list item (going to be empty) <li> </li>
    dd.textContent = placeLived.length; 

    document.querySelector("#places-lived").append(dt);               // <ul> <li> food 1</li> <li> food2</li> <li> </li> </ul>
    document.querySelector("#places-lived").append(dd);
})
