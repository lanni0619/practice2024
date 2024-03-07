moment();

let clock = document.getElementById('clock');
let test = document.getElementById('test');

setInterval(function(){
    let time = moment();
    let readTime = time.format('h:mm:ss A');
    clock.textContent = readTime;
},1000);

let num = 0;

function countNum(){
    test.textContent = num;
    num+=1;
    console.log(num);
}

setInterval(countNum(),1000);