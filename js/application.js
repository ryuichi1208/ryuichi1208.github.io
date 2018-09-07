function calculateAge(birthday) {
    var  birth = birthday.split('/');
    var _birth = parseInt("" + birth[2] + birth[0] + birth[1]);
    var  today = new Date();
    var _today = parseInt("" + today.getFullYear() + affixZero(today.getMonth() + 1) + affixZero(today.getDate()));
    return parseInt((_today - _birth) / 10000);
}

function affixZero(int) {
    if (int < 10) int = "0" + int;
    return "" + int;
}

$(function() {
    var birthday = calculateAge('03/05/1996');
    $('.years').each(function() {
        $(this).text(birthday);
    });
})
