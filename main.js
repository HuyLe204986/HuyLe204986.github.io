var logIn = document.querySelector('.js-login');
var signUp = document.querySelector('.js-signup');
var modal = document.querySelector('.js-modal');
var modalContainer = document.querySelector('.js-modal-container')

var formLogIn = document.querySelector('.auth-form:last-child');
var formSignUp = document.querySelector('.auth-form:first-child');


var isLogIn ;
var isSignUp;
var isModal;
function showLogIn() {
    modal.classList.remove('close');
    formSignUp.classList.add('close');
    isLogIn = true;
    isSignUp = false;
    isModal = true;
}

function showSignUp() {
    modal.classList.remove('close');
    formLogIn.classList.add('close');
    isLogIn = false;
    isSignUp = true;
    isModal = true;
}

logIn.addEventListener('click', showLogIn);
signUp.onclick = showSignUp;


function hide() {
    modal.classList.add('close'); 
    isModal = false;
    if(!isLogIn && isSignUp) {
        formLogIn.classList.remove('close');
    }else if(!isSignUp && isLogIn) {
        formSignUp.classList.remove('close');
    }
}

var closeForms = document.querySelectorAll('.js-auth-form__close');

for (var key in closeForms) {
    closeForms[key].onclick = hide;
}


modal.addEventListener('click',hide);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

// var btnDangNhap = document.querySelector('.js-btn-dangnhap');
// btnDangNhap.onclick = function() {
//     var formDangNhap = document.querySelector('.js-auth-form__form');
//     formDangNhap.addEventListener('submit', function(event) {
//     event.preventDefault(); // Ngăn chặn hành vi mặc định của form

//     var email = document.getElementById("js-email").value;
//     var password = document.getElementById("js-password").value;

//     var isValidEmail = kiemTraEmail(email);
//     var isValidPassword = kiemTraPassword(password);

//     if (isValidEmail && isValidPassword) {
//         window.location.href = "home/home.html";
//     }
// });

// }

var inputDangNhaps = document.querySelectorAll('.js-auth-form__input');
var hopLe3 = false;
var hopLe4 = false;
inputDangNhaps.forEach(function(element, idx) {
    element.addEventListener('input', function(event) {
        var inputValue = element.value;
        if(idx == 0) {
            if(kiemTraEmail(inputValue)){
                hopLe3 = true;
            }
        }else if(idx == 1) {
            if(kiemTraPassword(inputValue)){
                hopLe4 = true;
            }
        }
        if(hopLe3 && hopLe4) {
            btnDangNhap.classList.add('btn--color', 'btn--primary');
        }else {
            btnDangNhap.classList.remove('btn--color', 'btn--primary');
        }
    })
})

var btnDangNhap = document.querySelector('.js-btn-dangnhap');
btnDangNhap.onclick = function() {
    var formDangNhap = document.querySelector('.js-auth-form__form');
    formDangNhap.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var email = document.getElementById("js-email").value;
    var password = document.getElementById("js-password").value;

    var isValidEmail = kiemTraEmail(email);
    var isValidPassword = kiemTraPassword(password);

    if (isValidEmail && isValidPassword) {
        window.location.href = "home/home.html";
    }
});
}



function kiemTraEmail(email) {
    // Lấy giá trị nhập vào từ ô nhập liệu
    // var email = document.getElementById("js-email").value;
  
    // Biểu thức chính quy để kiểm tra định dạng email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Kiểm tra điều kiện email hợp lệ
    if (emailPattern.test(email)) {
      // Email hợp lệ, thực hiện các tác vụ khác tại đây
        return true;
    } else {
      // Email không hợp lệ, hiển thị thông báo lỗi
      return false;
    }
  }

  function kiemTraPassword(password) {
    // Lấy giá trị password từ ô nhập liệu
    // var password = document.getElementById("js-password").value;
  
    // Biểu thức chính quy để kiểm tra định dạng password
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    // Kiểm tra điều kiện password hợp lệ
    if (passwordPattern.test(password)) {
      // Password hợp lệ, thực hiện các tác vụ khác tại đây
      return true;
    } else {
      // Password không hợp lệ, hiển thị thông báo lỗi
      return false;
    }
  }


var inputSetPasswords =  document.querySelectorAll('.js-auth-form__input-pass');
var textSetPassNotifys = document.querySelectorAll('.invalid-password');


var hopLe1 = false;
var hopLe2 = false;
inputSetPasswords.forEach(function(elemnet, indx) {
    elemnet.addEventListener('input', function(event) {
        var valueInput = inputSetPasswords[indx].value;
        if(valueInput !== null) {
            if(!kiemTraPassword(valueInput)) {
                textSetPassNotifys[indx].style.display = 'block';
            }else {
                textSetPassNotifys[indx].style.display = 'none';
                if(indx == 0) hopLe1 = true;
                if(indx == 1) hopLe2 = true;
            }
        }
        if(hopLe1 && hopLe2) {
            btnDangKy.classList.add('btn--color', 'btn--primary');
        }   
    })   
})

function soSanh(value1, value2) {
    if(value1 == value2 && value1 != "" && value2 != ""){
        return true;
    }else {
        return false;
    }
}

var notifyErrorPass = document.querySelector('.invalid-password-not-coincidence');

var btnDangKy = document.querySelector('.js-btn-signup');
var countEqual = 0;
btnDangKy.onclick = function() {
    var formDangKy = document.querySelector('.js-form-signup');
    formDangKy.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var password1 = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;
    

    var isEqual = soSanh(password1,password2);
    if (isEqual) {
        notifyErrorPass.style.display = 'none';
        if(isModal) {
            formLogIn.classList.remove('close');
            formSignUp.classList.add('close');
            isLogIn = true;
            isSignUp = false;
        }
        countEqual++;
        if(hopLe1 && hopLe2 && countEqual == 1) {
            showSuccessToast();
        }
    }else {
        notifyErrorPass.style.display = 'block';
        btnDangKy.classList.remove('btn--color', 'btn--primary');
        hopLe1 = false;
        hopLe2 = false;
    }
});
}

  
var btnDangKyNgay = document.querySelector('.js-sign-in-link');
btnDangKyNgay.onclick = function() {
    if(isModal) {
        formLogIn.classList.add('close');
        formSignUp.classList.remove('close');
        isLogIn = false;
        isSignUp = true;
    }
}

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
        message: 'Đăng ký thành công',
        type: 'success',
        duration: 2000
    });
}