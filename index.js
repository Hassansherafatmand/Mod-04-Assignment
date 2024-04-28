// Module 04 Assignment
/*
Requirements for This Week
1- Design your JSON payload in advance. The JSON can be ready to go in your "script.js" file. You do not have to type it out during the recording.
2- Plan out in advance your HTML (index.html) and CSS (styles.css) so it's ready to go and doesn't require any or many alterations during the skills demonstration recording.
*/

// Defining the an object within an array of objects
const gameInfo = {
  legacyGame :[
    {
      "name": "The Witcher 3: Wild Hunt",
      "price": "29.99",
      "players": "Single Player",
      "release_date": "May 19, 2015",
      "url" : "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg?20210716120347"
    },
    {
      "name": "Red Dead Redemption 2",
      "price": "59.99",
      "players": "Single Player, Multiplayer",
      "release_date": "October 26, 2018",
      "url" : "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
    },
    {
      "name": "Fortnite",
      "price": "46.52",
      "players": "Multiplayer",
      "release_date": "July 25, 2017",
      "url" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfpFZz4HbCMIULZ0wqcX1uhEu6jUtIHaQVHjS5jOFpmT4GNB7"
    },
    {
      "name": "Minecraft",
      "price": "26.95",
      "players": "Single Player, Multiplayer",
      "release_date": "November 18, 2011",
      "url" : "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
    },
    {
      "name": "Sonic the Hedgehog",
      "price": "24.85",
      "players": "Single Player",
      "release_date": "June 23, 1991",
      "url" : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7ccJ5YF5Se0J0yIe_WXNbdAUhSa8szCdt27OUHBz9owbfzAY56DHRHNTXlQcRpl6OEtByYqHQ1lZOpOsAKywWO8PQAndx2SKx0ai3GUyScRVllcmNZLdsg8FcuwCacWXEXT-SylI&usqp=CAc"
    },
    {
      "name": "Sega Genesis Classics",
      "price": "29.99",
      "players": "Single Player, Multiplayer",
      "release_date": "May 29, 2018",
      "url" : "https://upload.wikimedia.org/wikipedia/en/4/46/300px-Sega_Mega_Drive_and_Genesis_Classics_cover.jpg"
    }
  ]
};
//****************************************************************************
// Function to validate if a price is a valid number
function isValidPrice(price) {
  return !isNaN(parseFloat(price));
}
//****************************************************************************
// Converting the JS object into JSON string, saving the data into local storage and retrieving the data.

//converting the JS object into JSON string and saving into local storage
let jsonString = JSON.stringify(gameInfo);
localStorage.setItem("favorGame", jsonString);

//retrieving the data from local storage.
let retrievedString = localStorage.getItem("favorGame");
let gameInformation = JSON.parse(retrievedString);


//****************************************************************************
//Transfer data into the HTML content (Table)

//Global Variable
var total = 0;
//get the table 
const table = document.querySelector('#gameTable');

//loop through the object to store the data into table
for (let i in gameInformation.legacyGame){
  //Create the elements
  const tableRow = document.createElement("tr");
  const dataColumn1 = document.createElement("td");
  const dataColumn2 = document.createElement("td");
  const dataColumn3 = document.createElement("td");
  const dataColumn4 = document.createElement("td");
  const dataColumn5 = document.createElement("td");
  const image = document.createElement("img");
  
  //Add content
  dataColumn1.textContent = gameInformation.legacyGame[i].name;
  dataColumn2.textContent = gameInformation.legacyGame[i].price;
  dataColumn3.textContent = gameInformation.legacyGame[i].players;
  dataColumn4.textContent = gameInformation.legacyGame[i].release_date;
 
   //Image
   image.classList.add("imgGame");
   if (gameInformation.legacyGame[i].url) {
     image.src = gameInformation.legacyGame[i].url; 
     image.alt = gameInformation.legacyGame[i].name;
   } else {
  
     image.src = "placeholder_image.jpg";
   }
  


  //Append Children
  tableRow.appendChild(dataColumn1);
  tableRow.appendChild(dataColumn2);
  tableRow.appendChild(dataColumn3);
  tableRow.appendChild(dataColumn4);
  dataColumn5.appendChild(image);
  tableRow.appendChild(dataColumn5);
  


  table.appendChild(tableRow);

  //Counting the Total Price
if (isValidPrice(gameInformation.legacyGame[i].price)) {
  total += parseFloat(gameInformation.legacyGame[i].price);
} else {
  alert("Invalid price for item: " + gameInformation.legacyGame[i].name);
}

}
// Creating the elements of total price of the Games:
const tableFoot = document.createElement("tfoot");
const footRow = document.createElement("tr");
const dataColumn1 = document.createElement("td");
const dataColumn2 = document.createElement("td");

//Add content
dataColumn1.textContent = "Total";
dataColumn2.textContent = "$" + total.toFixed(2);

//Append Children;
footRow.appendChild(dataColumn1);
footRow.appendChild(dataColumn2);
tableFoot.appendChild(footRow);

table.appendChild(tableFoot);