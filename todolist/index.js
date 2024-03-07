function inputBtn() {
    const listText = document.getElementById("input").value;
    var list = document.getElementById("list");
    var elemSpan = document.createElement('span');
    var elemLi = document.createElement('li');
    var elemBtn = document.createElement('button')

    let prior = document.getElementById('priorSelect');
    let index = prior.selectedIndex;
    let priorText = prior.options[index].text;

    elemSpan.textContent = listText;
    elemBtn.textContent = "Del";
    list.append(elemLi);
    elemLi.append(elemSpan);
    elemLi.append(elemBtn);

    if(priorText=="Important"){
        elemSpan.className = 'important';
    }

    if(priorText=="Urgent"){
        elemSpan.className = 'urgent';
    }

    elemBtn.onclick = delBtn;
}

function delBtn() {
    event.target.parentElement.remove();
}

function exportBtn() {
    let listText = document.getElementById('list').children;
    let exportText = "待辦事項: ";
    let num = 1;

    for (var x of listText) {
        if(x.children[0].className=='important'){
            exportText = exportText + '(' + num.toString() + ')*' + x.children[0].textContent + "* ";
        }else if(x.children[0].className=='urgent'){
            exportText = exportText + '(' + num.toString() + ')**' + x.children[0].textContent + "** ";
        }else{
            exportText = exportText + '(' + num.toString() + ')' + x.children[0].textContent + " ";
        }
        num = num + 1;
    }
    alert(exportText);
}