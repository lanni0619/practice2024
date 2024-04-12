var todos = [];

render();

function render() {
    let root = document.querySelector('#root');
    let ul = document.createElement('ul');

    root.textContent = "";

    for (let x of todos) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.append(x.title);
        li.append(span);
        ul.append(li);
    }
    root.append(ul);
}

function more() {
    let todo = document.querySelector('input').value;
    todos.push({ title: todo })
    render();
}