const form = document.getElementById('register');
const input = form.querySelector('textarea');

function messageWordCounter (){
    let msg = document.getElementsByClassName('message-box')[0];
    let charCounter = document.getElementsByClassName('char-left')[0];
    let charLeft;
    let maxChar = 250;

    charCounter.textContent = maxChar;

    msg.addEventListener('keydown', () => {
        setTimeout(function (){ 
            charCounter.textContent = maxChar - msg.value.length;
        }, 1);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const ul = document.getElementById('message-card');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
});

messageWordCounter();


