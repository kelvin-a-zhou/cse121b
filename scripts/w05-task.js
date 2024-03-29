/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = templeList => {
    templeList.forEach(temple => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent =  temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(img);
        article.appendChild(h3);

        templesElement.appendChild(article);
        
    })

}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    templeList = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json").then(response => response.json());
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = templeList => {

    reset();

    const filter = document.querySelector("#filtered").value;

    switch (filter) {

        case "utah":
            displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(templeList);
            break;
    }
};



/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () =>  {
    filterTemples(templeList);
});



getTemples();