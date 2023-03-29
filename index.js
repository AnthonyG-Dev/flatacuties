// Sends a GET request-->
fetch('http://localhost:3000/characters/')
// We are converting the response to JSON FORMAT
.then(res => res.json())
// We are passing the resulting data to the 'displayAnimalsData' function
  .then(data => displayAnimalsData(data))
  // This function receives an array of animal objects and displays them on the page
function displayAnimalsData(animals) {
  let cutest = document.querySelector('#animal-list');
  // In order to go thru all characters, we are creating a loop to iterate through each animal in the array
  animals.forEach(animal => {
    // Create a new list item element for the current animal
    let cute = document.createElement('li');
    cute.innerHTML = `
      <img src="${animal.image}" class="border">