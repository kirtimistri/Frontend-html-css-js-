const socket =io('http://localhost:8000');
const form =document.getElementById('send-container');
const messageinput =document.getElementById('massegeinp');
const messagecontainer=document.querySelector(".container")
const name = prompt("Enter your name to join chat");
socket.emit('new-user-joined', name);
const append =(message,position) => {
  const messageElement=document.createElement('div');
  messageElement.innerText=message;
  messageElement.classList.add('message');
  messageElement.classList.add(position);
  messagecontainer.append(messageElement);

}

socket.emit('new-user-joined',name);
socket.on('user-joined',name=> {
  append('${name} Jpined the chat','right');
}

)