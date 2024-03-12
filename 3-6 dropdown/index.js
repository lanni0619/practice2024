let aboutUs = document.querySelector('.about-us');
let subIndex = document.querySelector('.sub-index');

aboutUs.onclick = dropdown;
window.onclick = closeDrop;

function dropdown() {
    subIndex.classList.toggle('show');
}

function closeDrop(event) {
    if (event.target != aboutUs) {
        subIndex.classList.remove('show');
    }
}