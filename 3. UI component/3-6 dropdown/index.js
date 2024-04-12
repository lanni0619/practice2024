let allCommodity = document.querySelector('.all-commodity');
let allBrand = document.querySelector('.all-brand');
let aboutUs = document.querySelector('.about-us');
let subIndex = document.querySelectorAll('.sub-index');

allCommodity.onclick = dropdown;
allBrand.onclick = dropdown;
aboutUs.onclick = dropdown;
window.onclick = closeDrop;

function dropdown(event) {
    switch (event.target.closest('a').classList.value) {
        case 'all-commodity':
            subIndex[0].classList.toggle('show');
            break;

        case 'all-brand':
            subIndex[1].classList.toggle('show');
            break;

        case 'about-us':
            subIndex[2].classList.toggle('show');

        default:
            break;
    }
}

function closeDrop(event) {
    if (event.target != allCommodity) {
        subIndex[0].classList.remove('show');
    }

    if (event.target != allBrand) {
        subIndex[1].classList.remove('show');
    }

    if (event.target != aboutUs) {
        subIndex[2].classList.remove('show');
    }
}