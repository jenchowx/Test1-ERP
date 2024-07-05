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
    } finally {
      console.log('Done - saveFirstName')
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
  
  // export function updateNamesUI(names) {
  //   const namesContainer = document.getElementById('displayName');

  //   console.log('in updateNameUI');
  //   namesContainer.textContent = '';
  //   names.forEach(name => {
  //     const nameElement = document.createElement('div');
  //     nameElement.textContent = name;
  //     namesContainer.appendChild(nameElement);
  //     console.log('Done in updateNameUI');

  //   });
  // }

export async function updateNamesUI(firstName) {
    console.log('in updateNamesUI');
    return new Promise((resolve) => {
        document.getElementById('displayName').innerHTML = firstName;
        console.log('displatName - Display firstName: ', firstName);
        alert(`displayName - Display firstName: ${firstName}`);
        console.log('displayName: Done');
    resolve();
    });
}
  // const namesContainer = document.getElementById('displayName');

  // Clear the existing content
  // namesContainer.textContent = '';

  // Create a container for the names
  // const namesWrapper = document.createElement('div');
  // namesWrapper.style.maxHeight = '200px'; // Set a maximum height for the container
  // namesWrapper.style.overflow = 'auto'; // Add a scrollbar if needed

  // Add the names to the container
  // names.forEach(name => {
    // const nameElement = document.createElement('div');
    // nameElement.textContent = name;
    // nameElement.style.padding = '5px 0'; // Add some spacing between the names
    // namesWrapper.appendChild(nameElement);
  // });

  // Append the wrapper to the original container
  // namesContainer.appendChild(namesWrapper);
// }