
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
        lit+=`<li class="inactive">${monthlastdate - i + 1}</li>`;
    }
     // loop to add the dates of the current month
     for (let i=1; i <=lastdate; i++) {
        // check if the current date is today
        let isToday=i===date.getDate() && month===new Date().getMonth() && year===new Date().getFullYear() ? "active": "";
        lit+=`<li class="${isToday}">${i}</li>`
    }
    // loop to add the first dates of the next month
    for (let i=dayend; i < 6; i++) {
        lit+=`<li class="inactive">${i - dayend + 1}</li>`
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



