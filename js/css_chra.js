
$(window).load(function () {
    $('.loading').delay(1500).fadeOut(300);
});

function stopload() {
    $('.loading').delay(1000).fadeOut(700);
}
setTimeout('stopload()', 10000);