let loginTag = document.querySelector('.modal#login-modal');
let postTag = document.querySelector('.modal#post-modal')
let closeLogin = document.querySelector('#login-modal .btn-close');
let closePost = document.querySelector('#post-modal .btn-close');

function loginModal() {
    // loginTag.style.display = 'block';
    loginTag.style.width = '100%';
}

function postModal() {
    // postTag.style.display = 'block';
    postTag.style.width = '100%';

}

closeLogin.onclick = function () {
    loginTag.style.width = '0%';
}

closePost.onclick = function () {
    postTag.style.width = '0%';
}