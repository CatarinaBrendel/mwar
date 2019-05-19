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
    return maxChar = 250;
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
        messageWordCounter();
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

const post = new XMLHttpRequest();

post.onreadystatechange = function () {
    if(post.readyState === 4 && post.status === 200) {
        let message = JSON.parse(post.responseText);
        let statusHTML = '<ul id="message-card">';

        for (let i = 0; i < message.length; i += 1) {
           statusHTML += '<li>' + message[i].message + '</li>';
        } //end of for loop

    statusHTML += '</ul>';
    document.getElementById('message-container').innerHTML = statusHTML;
    console.log(statusHTML);

    } //end of condition post

} //end onreadystatechange

post.open('GET', 'posts.json');
post.send();