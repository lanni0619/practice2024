function toastSuccess() {
    var x = document.querySelector('.toast1');
    x.classList.add('success')
    setTimeout(function () {
        x.classList.remove('success');
    }, 3000);
}

function toastError() {
    var x = document.querySelector('.toast2');
    x.classList.add('error');
    setTimeout(function () {
        x.classList.remove('error');
    }, 3000);
}