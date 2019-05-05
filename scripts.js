const form = document.getElementById('register');
const input = form.querySelector('textarea');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const ul = document.getElementById('message-card');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
});










// function messageCharacterCounter (){
//     let msg = document.getElementsByClassName('message-box');
//     let charLeftLabel = 'char-left';
//     let charLeft = document.getElementById('char-left');
//     let maxChar = 250;
//     let maxCharWarn = 20;

//     charLeftLabel.textContent = maxChar;
    
//     msg.addEventListener('keydown', () => {
//         console.log(msg.value.length);
//     });
// }

// messageCharacterCounter();

