// document.getElementById('btn').addEventListener('click', displayText);

// async function displayText() {
// 	let text = document.getElementById('text').value;
// 	let delay = document.getElementById('delay').value;
// }

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), delay);
// });
// await promise;
// document.getElementById('output').innerHTML = text;
async function displayText() {
  // Get the user's text and delay
  let text = document.getElementById('text').value;
  let delay = document.getElementById('delay').value;

  // Create a promise that resolves after the delay
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), delay);
  });

  // Wait for the promise to resolve
  await promise;

  // Update the output div
  document.getElementById('output').innerHTML = text;
}

// Add an event listener to the button
document.getElementById('btn').addEventListener('click', displayText);