"use strict";
//import axios from 'axios';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let characters;
let root = document.getElementById("root");
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:3000/items");
        const sec_response = yield response.json();
        characters = sec_response;
        console.log(characters[1]);
        CreateCard(root, characters[2]);
    });
}
fetchData();
function noCharacterData(rootElement, message) {
    rootElement.innerHTML = message;
}
//noCharacterData(root,"They are no characters to display")
function CreateCard(rootElement, type) {
    const card = document.createElement('div');
    card.className = 'card';
    const card1 = document.createElement('div');
    card1.className = 'card1';
    const card2 = document.createElement('div');
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
