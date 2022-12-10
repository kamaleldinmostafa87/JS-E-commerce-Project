let username = document.querySelector('#username');
let password = document.querySelector('#password');
let submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (username.value === '' || password.value === '') {
        alert('enter username and password');
    }
    else {
        if(username.value === localStorage.getItem('username') &&
            password.value === localStorage.getItem('password')){
            window.location = 'index.html';
        }
    }
})

