// 從cookie取得輸入的資料
// if (document.cookie) {
//     var arr = document.cookie.split(';');
//     var myage = arr[0].split('=')[1];
//     var myname = arr[1].split('=')[1];
//     document.querySelectorAll('input')[0].value = myage;
//     document.querySelectorAll('input')[1].value = myname;
// }

// 改用cookie套件，就不用像下面寫得這麼麻煩 https://github.com/js-cookie/js-cookie
// if (document.cookie) {
//     document.querySelectorAll('input')[0].value = Cookies.get('myage');
//     document.querySelectorAll('input')[1].value = Cookies.get('myname');
// }

// function save() {
//     var myage = document.querySelectorAll('input')[0].value;
//     var myname = document.querySelectorAll('input')[1].value;
//     document.cookie = 'myage=' + myage;
//     document.cookie = 'myname=' + myname;
//     alert('saved!');
// }

if (document.cookie) {
    if (Cookies.get('check')) {
        removeCover();
    }
}

function removeCover() {
    let coverText = document.querySelector('#coverText');
    let img = document.querySelector('#showImg');
    coverText.classList.add('remove');
    img.classList.add('show');
    document.cookie = 'check=' + true;
    console.log(document.cookie);
    console.log(Cookies.get('check'));
}

// Delete a Cookie with JavaScript
// Deleting a cookie is very simple.
// You don't have to specify a cookie value when you delete a cookie.
// Just set the expires parameter to a past date:
function resetCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}