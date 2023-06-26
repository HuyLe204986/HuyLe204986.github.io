
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
var task1 = Dayslist[5];
var content = task1.innerHTML;
function themTask( {time='', text=''}) {
    content += `
    <div class="homeP-task__abbreviate workspace teamP__task" style="background-color: var(--study-color); width: calc(300% + 4px);">
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
    <div class="homeP-task__abbreviate workspace teamP__task" style="background-color: var(--study-color); width: calc(200% + 4px);">
        <div class="homeP-task__abbreviate-content" onclick = "showDetail2()">
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

var task3 = Dayslist[19];
var content3 = task3.innerHTML;
function themTask3( {time='', text=''}) {
    content3 += `
    <div class="homeP-task__abbreviate workspace teamP__task" style="background-color: var(--study-color); width: calc(200% + 4px);">
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
    <div class="homeP-task__abbreviate workspace teamP__task" style="background-color: var(--study-color);">
        <div class="homeP-task__abbreviate-content">
            <span class="homeP-task__abbreviate-time" style="background-color: var(--warning-color)";>${time}</span>
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
var listNames = ['Giao diện và trải nghiệm người dùng','Lập trình hướng đối tượng', 'GR1 2022-2', 'Tiếng Nhật 6', 'ITSS Software Development'];


teamItems.forEach(function(element, indx){
    element.onclick = function(e) {
        listTeamScreen.classList.add('close');
        detailTeam.classList.remove('close');
        document.querySelector('.homeP__title').innerHTML = `${listNames[indx]}`;
        // if( document.querySelector('.homeP__title').innerHTML === 'Lập trình hướng đối tượng') {
        //     var task5 = Dayslist[2];
        //     var content5 = task5.innerHTML;
        //     function themTask5( {time='', text=''}) {
        //         content5 += `
        //         <div class="homeP-task__abbreviate workspace teamP__task" style="background-color: var(--work-color);">
        //             <div class="homeP-task__abbreviate-content" onclick = "showDetail()">
        //                 <span class="homeP-task__abbreviate-time" style="background-color: var(--notDone-color);">${time}</span>
        //                 <span class="homeP-task__abbreviate-text">${text}</span>
        //             </div>
        //         </div>
        //         `;
        //     }
        //     function showTaskOnCalendar5() {
        //         themTask5({
        //             time: '0:00 - 23:59',
        //             text: 'Bài Tập OOP',
        //         });
        //     }
        //     showTaskOnCalendar5();
        //     task5.innerHTML = content5;
        // }
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
hoanthanh.onclick = function () {
    chiTiet.style.display = 'none'
}

themGiaiDoan.onclick = function() {
    chiTiet.style.display = 'none';
    showSuccessAddDetail();
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