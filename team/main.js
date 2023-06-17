
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