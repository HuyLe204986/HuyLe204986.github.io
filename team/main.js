
let date = new Date(); // tạo đối tượng ngày mới với ngày và giờ hiện tại
let year = date.getFullYear(); // lấy năm hiện tại
let month = date.getMonth(); //lấy tháng hiện tại

const day = document.querySelector(".schedule__dates");
const currentDate = document.querySelector(".schedule__current-date");
const prenexIcons = document.querySelectorAll(".schedule__navigation i");

const months = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",
];

//chức năng tạo lịch

const manipulate = ()=> {
    /**
     * getDate() lấy ngày (1 - 31)
        getDay() lấy ngày trong tuần (0-6)
     */
    //lấy ngày đầu của tháng
    let dayOne = new Date(year,month,1).getDay();

    // get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();
    // get the day of the last date of the month
    let dayend=new Date(year, month, lastdate).getDay();
    // get the last date of the previous month
    let monthlastdate=new Date(year, month, 0).getDate();

    let lit = ""; // variable to store the generated calendar HTML

    for (let i= dayOne; i > 0; i--) {
        lit+=`<li class="inactive"><span class="schdule-date-text">${monthlastdate - i + 1}</span></li>`;
    }
     // loop to add the dates of the current month
     for (let i=1; i <=lastdate; i++) {
        // check if the current date is today
        let isToday=i===date.getDate() && month===new Date().getMonth() && year===new Date().getFullYear() ? "active": "normalDay";
        lit+=`<li class="${isToday}"><span class="schdule-date-text">${i}</span></li>`
    }
    // loop to add the first dates of the next month
    for (let i=dayend; i < 6; i++) {
        lit+=`<li class="inactive"><span class="schdule-date-text">${i - dayend + 1}</span></li>`
    }
        
    // update the text of the current date element with the formatted current month and year
    currentDate.innerText=`${months[month]} ${year}`;
        
    // update the HTML of the dates element with the generated calendar
    day.innerHTML=lit;
}

manipulate();

 // Attach a click event listener to each icon
 prenexIcons.forEach(function(icon) {
    // When an icon is clicked
    icon.addEventListener("click", ()=> {
        // Check if the icon is "calendar-prev" or "calendar-next"
        month=icon.id==="calendar-prev" ? month - 1 : month + 1;
        // Check if the month is out of range
        if (month < 0 || month > 11) {
            // Set the date to the first day of the month with the new year
            date=new Date(year, month, new Date().getDate());
            // Set the year to the new year
            year=date.getFullYear();
            // Set the month to the new month
            month=date.getMonth();
        }
        else {
            // Set the date to the current date
            date=new Date();
        }
        // Call the manipulate function to update the calendar display
        manipulate();
    });
});

var oPenFormCreate = document.querySelector('.create__task');
var closeFormCreate = document.querySelector('.close-form__create');
var btnAddedFormCreate = document.querySelector('.js-homeP-form__create-btn');
var formCreate = document.querySelector('.homeP-form__create');
var contentForm = document.querySelector('.homeP-form__create-content');
function showFormCreate() {
    formCreate.classList.remove('close')
}

function hideFormCreate() {
    formCreate.classList.add('close')
}

oPenFormCreate.addEventListener('click', showFormCreate);
// // thong bao 

   function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');
        // auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        //remove toast when clicked
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fas fa-circle-check',
            info: 'fas fa-circle-info',
            warning: 'fas fa-circle-exclamation',
            error: 'fas fa-circle-exclamation',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>

            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>

            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toast);

    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công!',
        message: 'Đã thực hiện thành công',
        type: 'success',
        duration: 2000
    });
}

function showErrorToast() {
    toast({
        title: 'Cảnh báo!',
        message: 'Bạn chưa tạo công việc',
        type: 'warning',
        duration: 2000
    });
}

// thêm công việc
var Dayslist = document.querySelectorAll('.normalDay');
var task1 = Dayslist[1];
var content = task1.innerHTML;
function themTask( {time='', text=''}) {
    content += `
    <div class="homeP-task__abbreviate workspace teamP__task uxui_gr" style="background-color: var(--study-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content" onclick = "showDetail()">
            <span class="homeP-task__abbreviate-time">${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar() {
    themTask({
        time: '0:00 - 23:59',
        text: 'Bài Tập UIUX',
    });
}
showTaskOnCalendar();
task1.innerHTML = content;

var task2 = Dayslist[10];
var content2 = task2.innerHTML;
function themTask2( {time='', text=''}) {
    content2 += `
    <div class="homeP-task__abbreviate workspace teamP__task uxui_gr" style="background-color: var(--study-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content" >
            <span class="homeP-task__abbreviate-time">${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar2() {
    themTask2({
        time: '0:00 - 23:59',
        text: 'Thiết Kế Giao Diện',
    });
}
showTaskOnCalendar2();
task2.innerHTML = content2;

var task12 = Dayslist[21];
var content12 = task12.innerHTML;
function themTask12( {time='', text=''}) {
    content12 += `
    <div class="homeP-task__abbreviate workspace teamP__task uxui_gr" style="background-color: var(--study-color); width: calc(400% + 4px);">
        <div class="homeP-task__abbreviate-content" >
            <span class="homeP-task__abbreviate-time" style="background-color: var(--warning-color);">${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar12() {
    themTask12({
        time: '0:00 - 23:59',
        text: 'Nhận Xét Sản Phẩm',
    });
}
showTaskOnCalendar12();
task12.innerHTML = content12;

var task13 = Dayslist[5];
var content13 = task13.innerHTML;
function themTask13( {time='', text=''}) {
    content13 += `
    <div class="homeP-task__abbreviate workspace teamP__task uxui_gr" style="background-color: var(--study-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content" >
            <span class="homeP-task__abbreviate-time">${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar13() {
    themTask13({
        time: '0:00 - 23:59',
        text: 'Trả Lời Câu Hỏi Round 2',
    });
}
showTaskOnCalendar13();
task13.innerHTML = content13;

var task3 = Dayslist[18];
var content3 = task3.innerHTML;
function themTask3( {time='', text=''}) {
    content3 += `
    <div class="homeP-task__abbreviate workspace teamP__task uxui_gr" style="background-color: var(--study-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content" onclick = "showDetail3()">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--warning-color)";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar3() {
    themTask3({
        time: '19:00 - 20:00',
        text: 'Họp Team',
    });
}
showTaskOnCalendar3();
task3.innerHTML = content3;
var task3Screen = document.querySelector('.teamP-task2 .teamP-detail-task')
function showDetail3() {
    task3Screen.style.display = 'block';
    task3Screen.style.animation = `headerNotifyGrowwth ease-in 0.3s`;
}

document.querySelector('.teamP-task2 .homeP-task__icon-close').onclick = function() {
    task3Screen.style.display = 'none';
}

document.querySelector('.teamP-task2 .js-teamP_watch-detail').onclick = function() {
    xemDetail();
    document.querySelector('.teamP_notDone').style.display = 'none';
    document.querySelector('.js-homeP-detail-screen__name').innerHTML = 'Họp Team';
}

var task4 = Dayslist[16];
var content4 = task4.innerHTML;
function themTask4( {time='', text=''}) {
    content4 += `
    <div class="homeP-task__abbreviate workspace teamP__task uxui_gr" style="background-color: var(--study-color);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--warning-color);">${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar4() {
    themTask4({
        time: '19:00 - 23:00',
        text: 'Viết báo cáo',
    });
}
showTaskOnCalendar4();
task4.innerHTML = content4;


var task5 = Dayslist[3];
var content5 = task5.innerHTML;
function themTask5( {time='', text=''}) {
    content5 += `
    <div class="homeP-task__abbreviate workspace teamP__task oop_gr" style="background-color: var(--work-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content" onclick = "showDetail5()">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--notDone-color)";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar5() {
    themTask5({
        time: '19:00 - 23:00',
        text: 'Phân Tích UC',
    });
}
showTaskOnCalendar5();
task5.innerHTML = content5;

var task5Screen = document.querySelector('.teamP-task3 .teamP-detail-task')
function showDetail5() {
    task5Screen.style.display = 'block';
    task5Screen.style.animation = `headerNotifyGrowwth ease-in 0.3s`;
    themGiaiDoan.style.display = 'none';
}

document.querySelector('.teamP-task3 .homeP-task__icon-close').onclick = function() {
    task5Screen.style.display = 'none';
}

document.querySelector('.teamP-task3 .js-teamP_watch-detail').onclick = function() {
    xemDetail();
    document.querySelector('.teamP_notDone').style.display = 'none';
    document.querySelector('.teamP_overdue').style.display = 'inline-block';
    document.querySelector('.js-homeP-detail-screen__name').innerHTML = 'Phân Tích UC';
}

var task6 = Dayslist[14];
var content6 = task6.innerHTML;
function themTask6( {time='', text=''}) {
    content6 += `
    <div class="homeP-task__abbreviate workspace teamP__task oop_gr" style="background-color: var(--work-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--notDone-color)";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar6() {
    themTask6({
        time: '20:00 - 23:00',
        text: 'Thiết Kế Giao Diện',
    });
}
showTaskOnCalendar6();
task6.innerHTML = content6;

var task14 = Dayslist[9];
var content14 = task14.innerHTML;
function themTask14( {time='', text=''}) {
    content14 += `
    <div class="homeP-task__abbreviate workspace teamP__task oop_gr" style="background-color: var(--work-color); width: calc(400% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar14() {
    themTask14({
        time: '10:00 - 12:00',
        text: 'Họp Team Dev',
    });
}
showTaskOnCalendar14();
task14.innerHTML = content14;

var task15 = Dayslist[19];
var content15 = task15.innerHTML;
function themTask15( {time='', text=''}) {
    content15 += `
    <div class="homeP-task__abbreviate workspace teamP__task oop_gr" style="background-color: var(--work-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar15() {
    themTask15({
        time: '16:00 - 17:30',
        text: 'Giới Thiệu Sản Phẩm',
    });
}
showTaskOnCalendar15();
task15.innerHTML = content15;

var task7 = Dayslist[24];
var content7 = task7.innerHTML;
function themTask7( {time='', text='', time2='', text2=''}) {
    content7 += `
    <div class="homeP-task__abbreviate workspace teamP__task oop_gr" style="background-color: var(--work-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" >${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    <div class="homeP-task__abbreviate workspace teamP__task oop_gr" style="background-color: var(--work-color); margin-top: 24px; width: calc(300% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--warning-color);">${time2}</span>
            <span class="homeP-task__abbreviate-text">${text2}</span>
        </div>
    </div>
    <div class="homeP__moretask"><a href="">+1 more...</a></div>
    `;
}
function showTaskOnCalendar7() {
    themTask7({
        time: '7:00 - 9:00',
        text: 'Viết Báo Cáo',
        time2: '20:00 - 23:00',
        text2: 'Kiểm Thử Sản Phẩm',
    });
}
showTaskOnCalendar7();
task7.innerHTML = content7;

var task8 = Dayslist[4];
var content8 = task8.innerHTML;
function themTask8( {time='', text='', time2='', text2=''}) {
    content8 += `
    <div class="homeP-task__abbreviate workspace teamP__task gr1_gr" style="background-color: var(--entertain-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--notDone-color)";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    <div class="homeP-task__abbreviate workspace teamP__task gr1_gr" style="background-color: var(--entertain-color); margin-top: 24px; width: calc(300% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time">${time2}</span>
            <span class="homeP-task__abbreviate-text">${text2}</span>
        </div>
    </div>
    <div class="homeP__moretask"><a href="">+1 more...</a></div>
    `;
}
function showTaskOnCalendar8() {
    themTask8({
        time: '13:00 - 14:00',
        text: 'Báo Cáo GR1',
        time2: '15:00 - 16:00',
        text2: 'Thiết Kế Sản Phẩm',
    });
}
showTaskOnCalendar8();
task8.innerHTML = content8;


var task9 = Dayslist[13];
var content9 = task9.innerHTML;
function themTask9( {time='', text=''}) {
    content9 += `
    <div class="homeP-task__abbreviate workspace teamP__task gr1_gr" style="background-color: var(--entertain-color);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--warning-color)";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar9() {
    themTask9({
        time: '9:00 - 10:30',
        text: 'Họp Team Dev',
    });
}
showTaskOnCalendar9();
task9.innerHTML = content9;

var task10 = Dayslist[22];
var content10 = task10.innerHTML;
function themTask10( {time='', text=''}) {
    content10 += `
    <div class="homeP-task__abbreviate workspace teamP__task gr1_gr" style="background-color: var(--entertain-color);width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--warning-color)";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar10() {
    themTask10({
        time: '9:00 - 10:30',
        text: 'Kiểm Thử',
    });
}
showTaskOnCalendar10();
task10.innerHTML = content10;

var task16 = Dayslist[7];
var content16 = task16.innerHTML;
function themTask16( {time='', text=''}) {
    content16 += `
    <div class="homeP-task__abbreviate workspace teamP__task gr1_gr" style="background-color: var(--entertain-color);width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" >${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar16() {
    themTask16({
        time: '14:00 - 15:30',
        text: 'Phân Tích Yêu Cầu',
    });
}
showTaskOnCalendar16();
task16.innerHTML = content16;

var task17 = Dayslist[17];
var content17 = task17.innerHTML;
function themTask17( {time='', text=''}) {
    content17 += `
    <div class="homeP-task__abbreviate workspace teamP__task gr1_gr" style="background-color: var(--entertain-color);width: calc(400% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--warning-color);">${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar17() {
    themTask17({
        time: '6:45 - 10:30',
        text: 'Thiết Kế Sản Phẩm Round 2',
    });
}
showTaskOnCalendar17();
task17.innerHTML = content17;


var task11 = Dayslist[7];
var content11 = task11.innerHTML;
function themTask11( {time='', text=''}) {
    content11 += `
    <div class="homeP-task__abbreviate workspace teamP__task oop_gr" style="background-color: var(--work-color);width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time";>${time}</span>
            <span class="homeP-task__abbreviate-text">${text}</span>
        </div>
    </div>
    `;
}
function showTaskOnCalendar11() {
    themTask11({
        time: '9:00 - 10:30',
        text: 'Phân Tích Yêu Cầu',
    });
}
showTaskOnCalendar11();
task11.innerHTML = content11;




var taskContainer =document.querySelector('.homeP-task__container')
var closeTaskContaner = document.querySelector('.homeP-task__icon-close');
var watchDetail = document.querySelector('.js-watch-detail');
// var deleteTask = document.querySelector('.js-task-remove');
var btnDelete = document.querySelector('.js-homeP-delete-button');
var modalDelete = document.querySelector('.js-homeP-delete');
var btnEdit = document.querySelector('.js-detail-edit');
var btnExit = document.querySelector('.js-detail-exit');
// var modalEdit = document.querySelector('.js-homeP__wacht-detail');
// var modalEdit  = document.querySelector('.js-homeP-detail-screen')
var cancelDelete = document.querySelector('.js-homeP-cancel-button');
function showDetail() {
    taskContainer.style.display='block';
    taskContainer.style.animation=`headerNotifyGrowwth ease-in 0.3s`;
}

function hideDetail() {
    taskContainer.style.display='none';
}

function xoaTask() {
    modalDelete.style.display='block';
}

function xemDetail() {
    chiTiet.style.display = 'flex';
    document.querySelector('.teamP_notDone').style.display = 'inline-block';
    document.querySelector('.js-homeP-detail-screen__name').innerHTML = 'Bài Tập UIUX';
}

closeTaskContaner.addEventListener('click',hideDetail);
watchDetail.addEventListener('click', xemDetail);
// deleteTask.addEventListener('click',xoaTask);

function showSuccessDelete() {
    toast({
        title: 'Thành công!',
        message: 'Đã xóa thành công',
        type: 'success',
        duration: 2000
    });
}

function showSuccessEdit() {
    toast({
        title: 'Thành công!',
        message: 'Đã chỉnh sửa thành công',
        type: 'success',
        duration: 2000
    });
}





var infoUserForm = document.querySelector('.js-homeP__info-user');
var btnFormInfosave = document.querySelector('.js-info-user__save');
var btnFormInfocancel = document.querySelector('.js-info-user__cancel');
var thongTinTaiKhoan = document.querySelector('.js-homeP__navbar-user-item');


thongTinTaiKhoan.onclick = function() {
    infoUserForm.style.display = 'flex';
}




// addPercentBtn.addEventListener('click', function() {
//     stringPercent += 10;
//     percent.innerHTML = `${stringPercent}%`;
    
// })
//  minusPercentBtn.addEventListener('click', function() {
//     stringPercent -= 10;
//     percent.innerHTML = `${stringPercent}%`;
    
// })


function showSuccessJoin() {
    toast({
        title: 'Thành công!',
        message: 'Tham gia nhóm thành công',
        type: 'success',
        duration: 2000
    });
}

function showSuccessCreate() {
    toast({
        title: 'Thành công!',
        message: 'Tạo nhóm thành công',
        type: 'success',
        duration: 2000
    });
}
var joinTeamWithCode = document.querySelector('.js-team-witd-code');
var modalJoinWithCode = document.querySelector('.teamP-join-with-code'); 
var codeDone = document.querySelector('.js-teamP-code-done');
var codeCancel = document.querySelector('.js-teamP-code-cancel');

joinTeamWithCode.onclick = function() {
    modalJoinWithCode.style.display = 'flex';
}   

codeDone.onclick = function() {
    modalJoinWithCode.style.display = 'none';
    showSuccessJoin();
}

codeCancel.onclick = function() {
    modalJoinWithCode.style.display = 'none';
}

var createDone = document.querySelector('.js-create-done');
var createCancel = document.querySelector('.js-create-cancel');
var modalCreateTeam = document.querySelector('.teamP-create-team');
var btnCreateTeam = document.querySelector('.js-team-create');

btnCreateTeam.onclick = function() {
    modalCreateTeam.style.display = 'flex';
}

createDone.onclick = function () {
    modalCreateTeam.style.display = 'none';
    showSuccessCreate();
}

createCancel.onclick = function() {
    modalCreateTeam.style.display = 'none';
}

var iconSelectAccess = document.querySelector('.js-teamP-select-icon');
var listSelectAccess = document.querySelector('.js-teamP-create-list');

var accessInput = document.querySelector('.teamP-access__input');
var accessItems = document.querySelectorAll('.teamP-create-list__item');
iconSelectAccess.onclick = function() {
    listSelectAccess.style.display = 'block'
}

function checkColorActive() {
    var rs = 0;
    for(var i = 0; i< accessItems.length; i++) {
        if(accessItems[i].classList.contains('background--active')){
           rs = i;
        }
    }
    return rs;

}
for(var  i = 0; i < accessItems.length; i++) {
    accessItems[i].onclick = function(e) {
        listSelectAccess.style.display = 'none';
        accessInput.setAttribute('placeholder',`${e.target.innerHTML}`)
    }
}

var teamItems = document.querySelectorAll('.teamP-myteam-item');
var listTeamScreen = document.querySelector('.teamP__listTeam');
var detailTeam = document.querySelector('.teamP-detail__team');
var backTeam = document.querySelector('.backPage');
var listNames = ['Giao diện và trải nghiệm người dùng','Lập trình hướng đối tượng', 'GR1 2022-2', 'Tiếng Nhật 6', 
'ITSS Software Development', 'Kỹ năng mềm', 'Trí tuệ nhân tạo', 'Manchester is blue'];


var teamTask = document.querySelectorAll('.teamP__task');
var moreTask = document.querySelectorAll('.homeP__moretask');


teamItems.forEach(function(element, indx){
    element.onclick = function(e) {
        listTeamScreen.classList.add('close');
        detailTeam.classList.remove('close');
        document.querySelector('.homeP__title').innerHTML = `${listNames[indx]}`;
        if(indx == 0 || indx == 4) {
            teamTask.forEach(element => {
                if(element.classList.contains('uxui_gr')){
                    element.style.display = 'block';
                }else {
                    element.style.display = 'none';
                }
            });
            document.querySelector('.create__task.new__task').style.display = 'block';
            document.querySelector('.teamP-add__member-btn').style.display = 'block';
            moreTask.forEach(element => {
                element.style.display = 'none'
            });
            document.querySelector('.homeP__title').style.color = 'var(--study-color)';
        }else if(indx == 1 || indx == 5) {
            teamTask.forEach(element => {
                if(element.classList.contains('oop_gr')){
                    element.style.display = 'block';
                }else {
                    element.style.display = 'none';
                }
            });
            document.querySelector('.create__task.new__task').style.display = 'none';
            document.querySelector('.teamP-add__member-btn').style.display = 'none';
            moreTask[0].style.display = 'none';
            moreTask[1].style.display = 'block';
            document.querySelector('.homeP__title').style.color = 'var(--work-color)';

        }else if(indx == 2) {
            teamTask.forEach(element => {
                if(element.classList.contains('gr1_gr')){
                    element.style.display = 'block';
                }else {
                    element.style.display = 'none';
                }
            });
            moreTask[1].style.display = 'none';
            moreTask[0].style.display = 'block';
            document.querySelector('.homeP__title').style.color = 'var(--entertain-color)';

        }
    }
});






backTeam.onclick = function() {
    listTeamScreen.classList.remove('close');
    detailTeam.classList.add('close');
}

var taskTeam = document.querySelector('.teamP__task');
// var taskTeam = document.querySelector('.homeP-task');

taskTeam.onclick = showDetail;

function showSuccessAddDetail() {
    toast({
        title: 'Thành công!',
        message: 'Đã thêm giai đoạn mới',
        type: 'success',
        duration: 2000
    });
}

var themGiaiDoan = document.querySelector('.js-themgiaidoan');
var hoanthanh = document.querySelector('.js-hoanthanh');
var chiTiet = document.querySelector('.js-homeP-detail-screen');
var btnXem = document.querySelector('.js-teamP_watch-detail');
var screenThem = document.querySelector('.teamP-addnew-stage');
var closeThem = document.querySelector('.teamP-stage__close');
var xacNhanThem = document.querySelector('.teamP-stage-done');
hoanthanh.onclick = function () {
    chiTiet.style.display = 'none'
}

themGiaiDoan.onclick = function() {
    chiTiet.style.display = 'none';
    // showSuccessAddDetail();
    screenThem.style.display = 'flex'
}

closeThem.onclick = function() {
    chiTiet.style.display = 'flex';
    // showSuccessAddDetail();
    screenThem.style.display = 'none'
}

xacNhanThem.onclick = function() {
    chiTiet.style.display = 'flex';
    showSuccessAddDetail();
    screenThem.style.display = 'none'
}

btnXem.onclick = function() {
    chiTiet.style.display = 'flex';
}

function showSuccessAdd() {
    toast({
        title: 'Thành công!',
        message: 'Đã thêm thành viên mới thành công',
        type: 'success',
        duration: 2000
    });
}


var memberBtn = document.querySelector('.teamP-member');
var closeModalMember = document.querySelector('.teamP-screen__member-close')
var modalMember = document.querySelector('.teamP-screen__member');
var addMember = document.querySelector('.teamP-add__member-btn');
var btnAddMember = document.querySelector('.js-teamP__addmember-themThanhVien');
var btnNoAddMember = document.querySelector('.js-teamP__addmember-huy');
var modalAddMember = document.querySelector('.teamP__addmember');
var newtask = document.querySelector('.new__task');

memberBtn.onclick = function() {
    modalMember.style.display = 'flex';
}

closeModalMember.onclick = function() {
    modalMember.style.display = 'none';
}

addMember.onclick = function() {
    modalMember.style.display = 'none';
    modalAddMember.style.display = 'flex';
}

btnNoAddMember.onclick = function() {
    modalAddMember.style.display = 'none';
}

btnAddMember.onclick = function() {
    modalAddMember.style.display = 'none';
    showSuccessAdd();
}


var upFileBtn = document.querySelector('.js-upfile');
var inputFileBtn = document.querySelector('.js-inputfile');
var inputChat = document.querySelector('.js-input-chat');
var btnSendChat = document.querySelector('.js-send-chat');
var btnLike = document.querySelector('.js-likeChat')

upFileBtn.addEventListener('click', function() {
    inputFileBtn.click();
})

inputFileBtn.addEventListener('change', function() {
    const fileToUpload = fileInput.files[0]; // Lấy tệp được chọn

  // Tạo một đối tượng FormData
  const formData = new FormData();
  formData.append('file', fileToUpload);

  // Gửi yêu cầu POST sử dụng Fetch
  fetch('/upload', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      // Xử lý phản hồi từ máy chủ
      console.log('Tệp đã được gửi thành công!');
    })
    .catch(error => {
      // Xử lý lỗi nếu có
      console.error('Lỗi khi gửi tệp:', error);
    });
});

function renderChat(res) {
    var html = ''
    return html = `
    <li class="teamP-chat__flow-item">
        <div class="teamP-chat__flow-role teamP-chat__flow-role-me">Người dùng: Huy</div>
        <div class="teamP-chat__flow-content teamP-chat__flow-content-me" style="margin-top: 12px">
            <img class="teamP-chat__flow-avatar" src="https://www.svgrepo.com/show/16907/avatar.svg" alt="">
            <div class="teamP-chat__flow-mess">${res}</div>
        </div>
    </li>
    `;
}

function showChat() {
    var res = inputChat.value;
    document.querySelector('.teamP-chat__flow').innerHTML += renderChat(res);
    inputChat.value = '';
}

btnSendChat.onclick = showChat;

inputChat.onkeydown = function(e) {
    console.log(e.code);
    switch (e.which) {
        case 13:
            showChat();
            break;
    }
}

btnLike.onclick = function() {
    var kq = '\u{1F44D}';
    document.querySelector('.teamP-chat__flow').innerHTML += renderChat(kq);
}

var screenChat =  document.querySelector('.teamP-chat');
var containerChat = document.querySelector('.teamP-chat__container');
var btnComment = document.querySelector('.js-commentChat') // nút comment trong xem chi tiết
var screenShareFile = document.querySelector('.teamP-chat__file-share');

function hideChat() {
    screenChat.style.display = 'none';
    chiTiet.style.display = 'flex';
}

screenShareFile.onclick = function(e) {
    e.stopPropagation();
}

containerChat.onclick = function(e) {
    e.stopPropagation();
}

function showChat2() {
    screenChat.style.display = 'flex';
    // containerChat.style.animation=`headerNotifyGrowwth ease-in 0.3s`;
    chiTiet.style.display = 'none';
}


screenChat.addEventListener('click', hideChat);
btnComment.addEventListener('click', showChat2);

function displaySelectedFile() {
    const fileInput = document.getElementById('myFileInput');
    const fileNameElement = document.querySelector('.file-upload-name');
    
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      fileNameElement.textContent = fileName;
    } else {
      fileNameElement.textContent = 'Chọn file';
    }
}

function displaySelectedFile1() {
    const fileInput = document.getElementById('myFileInput1');
    const fileNameElement = document.querySelector('.file-upload-name1');
    
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      fileNameElement.textContent = fileName;
    } else {
      fileNameElement.textContent = 'Chọn file';
    }
}

function displaySelectedFile2() {
    const fileInput = document.getElementById('myFileInput2');
    const fileNameElement = document.querySelector('.file-upload-name2');
    
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      fileNameElement.textContent = fileName;
    } else {
      fileNameElement.textContent = 'Chọn file';
    }
}

function displaySelectedFile3() {
    const fileInput = document.getElementById('myFileInput3');
    const fileNameElement = document.querySelector('.file-upload-name3');
    
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      fileNameElement.textContent = fileName;
    } else {
      fileNameElement.textContent = 'Chọn file';
    }
}

var infoUpdate = document.querySelector('.js-infoFileUpdadte');
var infoClick = 0;
infoUpdate.onclick = function() {
    infoClick++;
    if(infoClick % 2 == 1){
        screenShareFile.style.display = 'block';
        screenShareFile.style.animation = `headerNotifyGrowwth ease-in 0.3s`;
    }else {
        screenShareFile.style.display = 'none';
    }
}

var closeTaoMoi = document.querySelector('.js-close-form__create');
var screenTaoMoi = document.querySelector('.homeP-form__create');
var btnTaoMoi = document.querySelector('.js-homeP-form__create-btn');
closeTaoMoi.addEventListener('click', function(){
    screenTaoMoi.classList.add('close');
})

function showSuccessTask() {
    toast({
        title: 'Thành công!',
        message: 'Đã thêm công việc mới thành công',
        type: 'success',
        duration: 2000
    });
}


btnTaoMoi.addEventListener('click', function() {
    showSuccessTask();
    screenTaoMoi.classList.add('close');
})