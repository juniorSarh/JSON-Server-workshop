//import axios from 'axios';

let characters:any[]

async function fetchData() {
  
    const response = await fetch("http://localhost:3000/items");
    const sec_response = await response.json()
    //console.log(sec_response); 
    characters= sec_response
    console.log(characters[5]);

    const listElement = document.getElementById('itemsList');

    if (listElement) {
      listElement.innerHTML = ''; // Clear existing items

      characters.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.id}: ${item.name}`;
        listElement.appendChild(li);
      });
    }
 }
window.onload=()=>{
    fetchData();
};


