jQuery(function ($) {
    function timer() {
        var nowDate = new Date();
        var achiveDate = new Date(yearData, monthData - 1, dayData, hoursData, minutesData, secondsData); //Задаем дату, к которой будет осуществляться обратный отсчет
        var result = (achiveDate - nowDate) + 1000;

        var seconds = Math.floor((result / 1000) % 60);
        var minutes = Math.floor((result / 1000 / 60) % 60);
        var hours = Math.floor((result / 1000 / 60 / 60) % 24);
        var days = Math.floor(result / 1000 / 60 / 60 / 24);
        if (days < 10) days = '0' + days;
        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;
        var elmnt = document.getElementById('js-timer');

        elmnt.innerHTML =
            '<div>' + '<div class="timer-number">' + days + '</div>' + '<div class="timer-name">' + 'дня' + '</div>' + '</div>' +
            '<div>' + '<div class="timer-number">' + hours + '</div>' + '<div class="timer-name">' + 'часа' + '</div>' + '</div>' +
            '<div>' + '<div class="timer-number">' + minutes + '</div>' + '<div class="timer-name">' + 'минут' + '</div>' + '</div>' +
            '<div>' + '<div class="timer-number">' + seconds + '</div>' + '<div class="timer-name">' + 'секунд' + '</div>' + '</div>';

        setTimeout(timer, 1000);
    }

    window.onload = function () {
        timer();
    }
});