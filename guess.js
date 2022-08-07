var main1 = document.getElementById('main1');
var main2 = document.getElementById('main2');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var targetnumber;
var chancenumber;

button1.addEventListener('click', start);

function start() {
    var usernumer = input1.value;
    if (usernumer < 10) {
        text1.innerHTML = "عدد انتخابی باید بزرگتر از 10 باشد"
    }
    if (usernumer == false) {
        text1.innerHTML = "لطفا عدد وارد کنید"
    } else {
        targetnumber = Math.floor(Math.random() * usernumer)
        main1.classList.toggle('displayclass');
        main2.classList.toggle('displayclass');
        chancenumber = Math.floor(usernumer / 18);
        text2.innerHTML = chancenumber;
    }
}

button2.addEventListener('click', guess);

function guess() {
    console.log(targetnumber);
    var userguess = input2.value
    if (userguess > targetnumber) {
        var newp = document.createElement('p');
        newp.innerHTML = `<p style="color:red;">${userguess}</p>`
        text3.appendChild(newp);
        chancenumber--;
        text2.innerHTML = chancenumber;
        input2.value = "";
        if (chancenumber == 0) {
            text3.innerHTML = `<p style="font-size:40px;color:purple">متاسفانه فرصت شما به پایان رسید</p>`
        }

    }
    if (userguess < targetnumber) {
        var newp = document.createElement('p');
        newp.innerHTML = `<p style="color:blue">${userguess}</p>`
        text3.appendChild(newp);
        chancenumber--;
        text2.innerHTML = chancenumber;
        input2.value = "";
        if (chancenumber == 0) {
            text3.innerHTML = `<p style="font-size:40px;color:purple">متاسفانه فرصت شما به پایان رسید</p>`
        }
    }
    if (userguess == targetnumber) {
        text3.innerHTML = `<p style="font-size:40px;color:purple">تبریک شما برنده شدید</p>`
        input2.value = "";
    }
}