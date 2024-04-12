let num1 = 0;

function plus() {
    num1 += 1
    alert(num1);
}

function substraction() {
    num1 -= 1
    alert(num1);
}

function cal() {
    let num2 = Number(document.querySelector('#num2').value);
    let num3 = Number(document.querySelector('#num3').value);
    let cal1 = num2 + num3;
    let cal2 = num2 - num3;
    let cal3 = num2 * num3;
    let cal4 = num2 / num3;
    alert(cal1);
    alert(cal2);
    alert(cal3);
    alert(cal4);
}