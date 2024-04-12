var todos = [];

render();

function render() {
    let root = document.querySelector('#root');
    let ul = document.createElement('ul');

    root.textContent = "";

    // for in instead of for of
    for (let index in todos) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let delBtn = document.createElement('button');

        span.textContent = todos[index].title;
        delBtn.textContent = '刪除';

        //New function of 6-3, delete todo by delete data model
        delBtn.onclick = () => {
            todos.splice(index, 1);
            render();
        }

        li.append(span, delBtn);
        ul.append(li);
    }
    root.append(ul);
}

function more() {
    let todo = document.querySelector('input').value;
    todos.push({
        title: todo,
    })
    render();
}