var task1 = document.querySelector('.normalDay-6');
var taskContainer = document.querySelector('.homeP-task__container');

function showTask(time, content) {
    taskContainer.style.display = 'block';
    taskContainer.style.animation=`headerNotifyGrowwth ease-in 0.3s`;
}

var listDates = document.querySelectorAll('.workspace');
var Dates = document.querySelectorAll('.normalDay');
Dates[5].childNodes[6].innerText = '';
Dates[7].childNodes[6].innerText = '';
var lengthDate = listDates.length;
for (const key in listDates) {
    if(listDates[key].style.backgroundColor === 'var(--work-color)') {
        continue;
    }else {
        listDates[key].style.display = 'none';
    }
}
