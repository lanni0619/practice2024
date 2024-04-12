// jQuery
$('.container_question').css('color', 'darkblue');
$('.container_question').css('margin', '1rem');
$('.container_question').css('padding', '1rem');
$('.container_question').css('width', '480px');
$('.container_question').css('font-size', '18px');
$('.container_question').css('border', '1px solid black')

// datetimepicker
$.datetimepicker.setLocale('zh');
$('#datetimepicker1').datetimepicker();
$('#datetimepicker2').datetimepicker();

function outputText() {
    let datetimepicker1 = document.getElementById('datetimepicker1').value;
    let datetimepicker2 = document.getElementById('datetimepicker2').value;
    let text = document.getElementById('outputText');
    text.innerHTML = "您的入住時間為:" + datetimepicker1 + "," + "退房時間為" + datetimepicker2
}

//slick (https://www.tiny.cloud/docs/tinymce/6/full-featured-premium-demo/)
$('.container_slick').css('margin', '10px auto');
$('.container_slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
});

//tinymce (https://github.com/tinymce/tinymce)
tinymce.init({
    selector: 'textarea#mytextarea',
});