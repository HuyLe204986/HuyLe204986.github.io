var task1 = document.querySelector('.normalDay-6');
var taskContainer = document.querySelector('.homeP-task__container');

function showTask(time, content) {
    taskContainer.style.display = 'block';
    taskContainer.style.animation=`headerNotifyGrowwth ease-in 0.3s`;
}

var listDates = document.querySelectorAll('.workspace');
var lengthDate = listDates.length;
for (const key in listDates) {
    if(listDates[key].style.backgroundColor === 'var(--study-color)') {
        continue;
    }else {
        listDates[key].style.display = 'none';
    }
}
