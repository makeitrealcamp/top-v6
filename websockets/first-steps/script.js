const websocket = new WebSocket('wss://mir-chat.herokuapp.com/');

const form = document.querySelector('.form');
const container = document.querySelector('.container');

websocket.onopen = event => {
  console.log(event);

  form.addEventListener('submit', e => {
    e.preventDefault();

    // const message = e.target.elements.message;
    // const sender = e.target.elements.sender;
    const { message, sender } = e.target.elements;

    websocket.send(JSON.stringify({
      message: message.value,
      sender: sender. value
    }));
  });
}

websocket.onmessage = function(event) {
  const data = JSON.parse(event.data);

  container.innerHTML += `
    <div class="message">
      <p>${data.message}</p>
      <p>By: ${data.sender}</p>
    </div>
  `;
}

websocket.onclose = function(event) {
  console.log(event);
}

websocket.onerror = function(event) {
  console.log('error', event)
}

// setTimeout(() => {
//   websocket.close();
// }, 1500);
