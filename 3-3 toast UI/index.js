function toastSuccess(){
    var x = document.querySelector('.toast1');
    x.className = x.className + " success";
    setTimeout(function(){ 
        x.className = x.className.replace(" success", ""); 
    }, 3000);
}

function toastError(){
    var x = document.querySelector('.toast2');
    x.className =x.className + " error";
    setTimeout(function(){ 
        x.className = x.className.replace(" error", ""); 
    }, 3000);
}