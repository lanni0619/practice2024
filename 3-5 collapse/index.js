// How to - Toggle Class
// https://www.w3schools.com/howto/howto_js_toggle_class.asp

var questions = document.querySelectorAll('.question');
var answers = document.querySelectorAll('.answer');
for (var question of questions) {
    question.onclick = toggle;
}
function toggle(event) {
    var answer = event.target.nextElementSibling;
    if (!answer.style.maxHeight) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        event.target.classList.toggle('arrow-rotate');
    } else {
        answer.style.maxHeight = '';
        event.target.classList.toggle('arrow-rotate');
    }
}