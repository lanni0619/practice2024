var todos = [
    {
        title: "倒垃圾"
    },
    {
        title: "繳電話費"
    },
    {
        title: "採買本週食材"
    },
];

render();

function render() {
    let root = document.querySelector('#root');
    let ul = document.createElement('ul');

    root.textContent = "";

    for (x of todos) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.append(x.title);
        li.append(span);
        ul.append(li);
    }
    root.append(ul);
}