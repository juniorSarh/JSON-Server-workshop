//import axios from 'axios';

interface Character {
    id:string,
    name:string,
    Ki:string,
    maxKi:string,
    race:string,
    gender:string,
    description:string,
    deletedAt: null |string,
    affiliation:string,
    image:string
}

let characters:any
let root = document.getElementById("root") as HTMLElement

async function fetchData() {
  
    const response = await fetch("http://localhost:3000/items");
    const sec_response = await response.json()
    characters = sec_response;
    console.log(characters[1]); 
    CreateCard(root,characters[2])
}
fetchData();


function noCharacterData(rootElement:HTMLElement, message:string):void {
rootElement.innerHTML = message;
}
//noCharacterData(root,"They are no characters to display")

function CreateCard(rootElement:HTMLElement, type:Character):void {
    const card = document.createElement('div') as HTMLDivElement;
    card.className = 'card';

    const card1 = document.createElement('div') as HTMLDivElement;
    card1.className ='card1';

    const card2 = document.createElement('div') as HTMLDivElement;
    card2.className = 'card2';

    // Set background image for card1

        card1.style.backgroundImage = `url(${type.image})`;
        card1.style.backgroundSize = 'cover'; // optional for better fit
        card1.style.backgroundPosition = 'center'; // optional
   
    
   
    card2.innerHTML = `
        ID: ${type.id} <br>
        Name: ${type.name} <br>
        Gender: ${type.gender} <br>
    `;

    card.appendChild(card1);
    card.appendChild(card2);
    rootElement.appendChild(card);
}