function menuRoll() {
    var checkbocFirst = document.getElementById('ossm');
    var checkboxSecond = document.getElementById('ossmsch');
    var tlomenu = document.getElementById('tlomenu');
    if(checkbocFirst.checked){
        checkbocFirst.checked = false;
        checkbocFirst.style.visibility = 'visible';
        checkboxSecond.style.setProperty('visibility', 'visible');
        tlomenu.style.setProperty('visibility', 'visible');
        checkboxSecond.checked = false;
    }

}

function menuUnRoll() {
    var checkbocFirst = document.getElementById('ossm');
    var checkboxSecond = document.getElementById('ossmsch');
    var tlomenu = document.getElementById('tlomenu');
    if(checkboxSecond.checked){
        checkbocFirst.checked = false;
        tlomenu.style.setProperty('visibility', 'collapse');
        checkboxSecond.style.setProperty('visibility', 'collapse');
        checkboxSecond.checked = false;
    }

}

