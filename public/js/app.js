console.log('hello');

const form = document.getElementById('address-form');

const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  messageOne.textContent = 'Loading';
  messageTwo.textContent = '';

  const input = document.getElementById('address');
  const address = input.value;

  fetch('http://localhost:3003/weather?address=' + address)
  .then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    })
  });
})
