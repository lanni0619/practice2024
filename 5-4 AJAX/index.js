// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))
let tagUl = document.getElementById('list');

function load() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            for (let product of json) {
                let spanTag = document.createElement('span');
                let liTag = document.createElement('li');
                let buttonTag = document.createElement('button');
                let imgTag = document.createElement('img');
                imgTag.src = product.image;
                spanTag.append(product.title);
                buttonTag.append('Details');
                buttonTag.classList.add('btn' + product.id)
                liTag.append(spanTag, imgTag, buttonTag);
                tagUl.append(liTag);

                document.querySelector('.btn' + product.id).addEventListener('click', function () {
                    alert(product.id);
                    alert(product.category);
                    alert(product.description);
                });
            }
        })
}