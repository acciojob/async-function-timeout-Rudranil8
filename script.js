//your JS code here. If required.
document.getElementById('btn').addEventListener('click', displayText);

async function displayText() {
	let text = document.getElementById('text').value;
	let delay = document.getElementById('delay').value;
}

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), delay);
});
await promise;
document.getElementById('output').innerHTML = text;