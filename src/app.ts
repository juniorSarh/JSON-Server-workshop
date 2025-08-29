//import axios from 'axios';

let characters:any[]

async function fetchData() {
  
    const response = await fetch("http://localhost:3000/items");
    const sec_response = await response.json()
    characters = sec_response;
    console.log(sec_response[1]); 
}
fetchData();

let root = document.getElementById("root") as HTMLElement
function noCharacterData(rootElement:HTMLElement, message:string):void {
rootElement.innerHTML = message;
}
noCharacterData(root,"They are no characters to display")