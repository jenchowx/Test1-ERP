// script.js
import { saveFirstName, loadNames, updateNamesUI } from './utils.js';


const form = document.querySelector('form');
// const displayName = document.getElementById('displayName');
form.addEventListener('click', myFunction) ;

// form.addEventListener('click', () => {
//     const firstNameInput = document.getElementById('firstName');
//     const firstName = firstNameInput.value.trim();
//     displayName.textContent = firstName;
// });

function myFunction() {
    const displayName = document.getElementById('displayName');
    const firstNameInput = document.getElementById('firstName');
    const firstName = firstNameInput.value.trim();
    displayName.textContent = firstName;
    // saveFirstName(firstName);
}

// form.addEventListener("click", myFunction);

// function myFunction() {

//   document.getElementById("displayName").textContent = inputFirstName.value;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const nameInput = document.getElementById('nameInput');
//   const saveButton = document.getElementById('saveButton');

//   saveButton.addEventListener('click', async () => {
//     const firstName = nameInput.value.trim();

//     if (firstName) {
//       await saveFirstName(firstName);
//       alert('Name saved successfully!');
//       nameInput.value = '';
//       await loadNames();
//       updateNamesUI();
//     } else {
//       alert('Please enter a name');
//     }
//   });

//   loadNames();
// });

// const form = document.querySelector('form');
// const displayNameElement = document.getElementById('displayName');

// form.addEventListener('click', async ()=> {

//   const firstNameInput = document.getElementById('firstName');
//   const firstName = firstNameInput.value.trim();

//   displayNameElement.textContent = firstName;
  
  //update the server
//   fetch('/save-name', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({firstName}),
//     })
//     .then((response) => {
//       if(response.ok) {
//         console.log('Name saved successfully');
//       } else {
//         console.error('Error saving name');
//       }
//     })
//     .catch((error) => {
//       console.error('Error: ', error);
//     });
// });
