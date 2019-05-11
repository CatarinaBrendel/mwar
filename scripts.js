const form = document.getElementById('register');
const input = form.querySelector('textarea');
let charCounter = document.getElementsByClassName('char-left')[0];
let postCounter = 0;

function messageWordCounter (){
    let msg = document.getElementsByClassName('message-box')[0];
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
    const dateLine = document.createElement('p');
    let getDate = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const postCounting = document.getElementById('post-counter');
    
    dateLine.textContent = getDate.toLocaleTimeString('en-DE', options);
    
    li.textContent = text;
    if (li.textContent !== ''){
        ul.appendChild(li);
        li.appendChild(dateLine);
        postCounter += 1;
        postCounting.textContent = postCounter + ' Posts';
    }
});

messageWordCounter();

const userLogo = document.getElementById('user-logo');

userLogo.addEventListener('click', () => {
    const sideMenu = document.getElementsByClassName('side-menu')[0];
    if (sideMenu.style.display === 'none'){
        sideMenu.style.display = 'block';
    } else{
        sideMenu.style.display = 'none';
    }
    
});