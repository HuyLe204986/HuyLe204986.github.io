var Dates = document.querySelectorAll('.normalDay');

var listDates = document.querySelectorAll('.workspace');
Dates[3].childNodes[6].innerText = '';
Dates[5].childNodes[6].innerText = '';
var lengthDate = listDates.length;
for (const key in listDates) {
    if(listDates[key].style.backgroundColor === 'var(--entertain-color)') {
        continue;
    }else {
        listDates[key].style.display = 'none';
    }
}



