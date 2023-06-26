
var canvasElement = document.getElementById('canvas');
var config = {
    type: "bar",
    data: {
        labels: ["Tháng 1","Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"], 
        datasets: [{ 
            label:"Hoàn thành", 
            data: [9, 6, 7, 14, 17, 16],
            backgroundColor: [
               " rgb(255, 119, 119, 0.8)"
            ],
            borderColor: [
                " rgb(255, 119, 119, 1)"
            ],
            borderWidth: 1,
        },
        { 
            label:"Quá hạn", 
            data: [1, 4, 6, 3, 7, 8],
            backgroundColor: [
               "rgb(105, 75, 219,0.8)"
            ],
            borderColor: [
                "rgb(105, 75, 219,1)"
            ],
            borderWidth: 1,
        }],
    },
};

var cookieChart = new Chart(canvasElement, config);


var pieChartsElement = document.getElementById('my-canvas');

const data = {
    labels: [
      'Hoàn thành',
      'Quá hạn',
      'Đang thực hiện'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [69, 29, 2],
      backgroundColor: [
        " rgb(255, 119, 119, 0.8)",
        "rgb(105, 75, 219,0.8)",
        "rgb(102,51,23,0.8)"
      ],
      hoverOffset: 4
    }]
  };


const fig = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
       legend: {
         display: false
       }
    },
    
};

var pieChart = new Chart(pieChartsElement, fig)

var statisticIccon  = document.querySelector('.js-homeP__statistic-icon');
var conutTimeSelect = 0;
statisticIccon.addEventListener('click', function() {
    conutTimeSelect++;
    if(conutTimeSelect % 2 == 0) {
        document.querySelector('.homeP__statistic-time-select').style.display = 'none';
    }else {
        document.querySelector('.homeP__statistic-time-select').style.display = 'block';
    }
})