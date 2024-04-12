let tagUl = document.getElementById('list');
let postTag = document.querySelector('.modal#post-modal')
let closePost = document.querySelector('#post-modal .btn-close');
let showName = document.getElementById('showName');
let showClass = document.getElementById('showClass');
let showExplain = document.getElementById('showExplain');
let showPhoto = document.getElementById('showPhoto');
let showPrice = document.getElementById('showPrice');

function load() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            for (let product of json) {
                let spanTag = document.createElement('span');
                let liTag = document.createElement('li');
                let buttonTag = document.createElement('button');
                let delBtn = document.createElement('button');

                spanTag.append(product.title);
                buttonTag.append('Details');
                buttonTag.classList.add('btn' + product.id)
                delBtn.append('delete');
                delBtn.classList.add('delBtn');
                liTag.append(spanTag, buttonTag, delBtn);
                tagUl.append(liTag);

                liTag.dataset.title = product.title;
                liTag.dataset.category = product.category;
                liTag.dataset.description = product.description;
                liTag.dataset.image = product.image;
                liTag.dataset.price = product.price;

                buttonTag.onclick = postModal;

                delBtn.onclick = () => {
                    fetch('https://fakestoreapi.com/products/' + product.id, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(json => console.log(json))
                    event.target.closest('li').remove()
                }
            }
        })
        .catch(error => {
            alert('抱歉，請稍後重新嘗試。');
        })
}

function postModal(event) {
    postTag.style.width = '100%';
    showName.textContent = event.target.closest('li').dataset.title;
    showClass.textContent = event.target.closest('li').dataset.category;
    showExplain.textContent = event.target.closest('li').dataset.description;
    showPhoto.src = event.target.closest('li').dataset.image;
    showPrice.textContent = event.target.closest('li').dataset.price;
}

closePost.onclick = function () {
    postTag.style.width = '0%';
}