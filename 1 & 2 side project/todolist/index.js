function inputBtn() {
    const listText = document.querySelector('#input').value;
    let list = document.querySelector('#list');
    let elemSpan = document.createElement('span');
    let elemLi = document.createElement('li');
    let elemBtn = document.createElement('button');
    let doneBtn = document.createElement('button');
    let statusText = document.createElement('p');

    let prior = document.querySelector('#priorSelect');
    let index = prior.selectedIndex;
    let priorText = prior.options[index].text;

    if(listText==""){
        alert("您未輸入待辦事項:(");
    }else{    
        elemSpan.textContent = listText;
        doneBtn.textContent = '[標記完成]';
        elemBtn.textContent = 'Delete';
        statusText.textContent = '(已完成)';
        statusText.className = 'statusText';
        doneBtn.className = 'doneBtn';
    
        list.append(elemLi);
        elemLi.append(elemSpan,statusText,doneBtn,elemBtn);
    
        elemBtn.onclick = delBtn;
        doneBtn.onclick = statusCheck;
    
        if (priorText == 'Important') {
            elemSpan.className = 'important';
        }
    
        if (priorText == 'Urgent') {
            elemSpan.className = 'urgent';
        }
    }
}

function delBtn() {
    event.target.closest('li').remove();
}

function exportBtn() {
    let listText = document.querySelectorAll('li span');
    let exportText = "待辦事項: ";
    let num = 1;

    if(listText.length==0){
        alert("無清單可匯出:(");
    }else{
        for (var x of listText) {
            if (x.className == 'important') {
                exportText = exportText + '(' + num.toString() + ')*' + x.textContent + "* ";
            } else if (x.className == 'urgent') {
                exportText = exportText + '(' + num.toString() + ')**' + x.textContent + "** ";
            } else {
                exportText = exportText + '(' + num.toString() + ')' + x.textContent + " ";
            }
            num = num + 1;
        }
        alert(exportText);
    }
}
function changeInputColor() {
    let elemInput = document.querySelector('#input');
    elemInput.classList.remove('orangeFont');
    elemInput.classList.remove('redFont');
    elemInput.classList.remove('blackFont');
    switch (event.target.value) {
        case 'important':
            elemInput.className = elemInput.className + 'orangeFont';
            break;
        case 'urgent':
            elemInput.className = elemInput.className + 'redFont';
            break;
        default:
            elemInput.className = elemInput.className + 'blackFont';
            break;
    }
}

function statusCheck(){
    let x = event.target;
    let y = x.closest('li');
    let z = y.querySelector('.statusText');
    if(x.textContent=='[標記完成]'){
        x.textContent = '[取消標記]';       
        z.style.display='block';
    }else if (x.textContent=='[取消標記]'){
        x.textContent = '[標記完成]';
        z.style.display='none';
    }
}