// utils.js
export async function saveFirstName(firstName) {
    try {
      await fetch('/save-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName })
      });
    } catch (err) {
      console.error('Error saving name:', err);
      throw err;
    }
  }
  
  export async function loadNames() {
    try {
      const response = await fetch('/names');
      return await response.json();
    } catch (err) {
      console.error('Error loading names:', err);
      throw err;
    }
  }
  
  export function updateNamesUI(names) {
    // const namesContainer = document.getElementById('namesContainer');
    const namesContainer = document.getElementById('displayName');

    namesContainer.textContent = '';
    names.forEach(name => {
      const nameElement = document.createElement('div');
      nameElement.textContent = name;
      namesContainer.appendChild(nameElement);
    });
  }