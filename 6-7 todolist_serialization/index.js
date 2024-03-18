let todos = [];

loadLocalData();
render();

function more() {
    let todo = document.querySelector('input').value;
    let category = document.querySelector('select').value;
    todos.push({
        title: todo,
        category: category,
        isCompleted: false,
    })
    render();
}

function render() {
    let root = document.querySelector('#root');
    let ul = document.createElement('ul');

    root.textContent = "";

    // (for in) instead of (for of)
    for (let index in todos) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let span2 = document.createElement('span');
        let delBtn = document.createElement('button');
        let checkBtn = document.createElement('button');

        span.textContent = todos[index].title;
        span2.textContent = '(done)';
        delBtn.textContent = '刪除';
        //New function of 6-5，每次render時要依據isCompleted屬性值來顯示checkBtn的內容
        if (todos[index].isCompleted) {
            checkBtn.textContent = '[標示為未完成]';
            span2.style.display = 'inline-block';
        } else {
            checkBtn.textContent = '[標示為已完成]';
            span2.style.display = 'none';
        }

        //New function of 6-3, delete todo by delete data model
        delBtn.onclick = () => {
            todos.splice(index, 1);
            render();
        }
        //New function of 6-4, different category with specify background color
        if (todos[index].category == 'important') {
            span.style.color = 'orange';
        } else if (todos[index].category == 'urgent') {
            span.style.color = 'red';
        }

        //New function of 6-5, isCompleted button
        checkBtn.onclick = () => {
            todos[index].isCompleted = !todos[index].isCompleted;
            if (todos[index].isCompleted == true) {
                checkBtn.textContent = '[標示為未完成]';
                span2.style.display = 'inline-block';
            } else {
                checkBtn.textContent = '[標示為已完成]';
                span2.style.display = 'none';
            }
        }
        li.append(span, span2, checkBtn, delBtn);
        ul.append(li);
    }
    root.append(ul);
}

function output() {
    let printText = '今日待辦事項:\n';
    let space = " ";
    let star = "*";
    let point = '.';
    for (let index in todos) {
        let sortNum = Number(index) + 1;
        let todo = todos[index].title;
        if (todos[index].category == 'important') {
            printText = printText + sortNum + point + space + star + todo + star + '\n';
        } else if (todos[index].category == 'urgent') {
            printText = printText + sortNum + point + space + star + star + todo + star + star + '\n';
        } else {
            printText = printText + sortNum + point + space + todo + '\n';
        }
    }
    alert(printText);
}

function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
    alert('儲存成功！')
}

function loadLocalData() {
    //remember to check local storage at first. Or will be occur some problem
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
}