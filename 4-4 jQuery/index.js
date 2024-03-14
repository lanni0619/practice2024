$('.question').css('color','red');
$('.question').css('color','red');
$('.question').css('margin','10px');

$.datetimepicker.setLocale('zh');

$('#datetimepicker1').datetimepicker();
$('#datetimepicker2').datetimepicker();

function outputText(){
    let datetimepicker1 = document.getElementById('datetimepicker1').value;
    let datetimepicker2 = document.getElementById('datetimepicker2').value;
    let text = document.getElementById('outputText');
    text.innerHTML = "您的入住時間為:"+datetimepicker1+","+"退房時間為"+datetimepicker2
}