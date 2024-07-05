import { saveFirstName, loadNames, updateNamesUI } from "./utils.js";

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', myDisplayer);

async function myDisplayer() {
    const firstNameElement = document.getElementById('firstName');
    const firstName = firstNameElement.value;
  
    try {
      console.log('firstName.value:', firstName);
      await displayName(firstName);

      await saveFirstName(firstName);
      // const names = await loadNames();
      await loadNames();      
      // await updateNamesUI(firstName);
    } catch (error) {
      console.log('Error in catch: ', error);
    } finally {
      console.log('Quit myDisplayer');
    }
  }

async function displayName(firstName){
  return new Promise((resolve) => {
      document.getElementById('displayName').innerHTML = firstName;
      console.log('displatName - Display firstName: ', firstName);
      alert(`displayName - Display firstName: ${firstName}`);
      console.log('displayName: Done');
  resolve();
  });
}