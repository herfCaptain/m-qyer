import signUpTpl from '../views/signUp.html'
import signUpHeadTpl from '../views/signUpHead.html'
const render = () => {
    // document.querySelector("#root").firstChild.innerHTML += messageTpl

    document.querySelector("#box").innerHTML = signUpTpl;
    document.querySelector("#head").innerHTML = signUpHeadTpl;
    var user = {};
    var mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
    var id_count = 0;
    $(".comeBack").click(function () {
        history.back()
    })
    
    $(".link").click(function () {
        // alert(1)
        var num = $("#phone").val()
        console.log(num)
        if (mobile.test(num)) {
            if (localStorage.users) {
                userArr = JSON.parse(localStorage.users)
            }
            else {
                console.log(1)
                var userArr = [];
            }
            if (userArr.length > 0) {
                var bStop = false;
                for (var i = 0; i < userArr.length; i++) {
                    if (userArr[i].phone == num) {
                        bStop = true;
                        if (confirm("你已经注册，请登录")) {
                            location.href = "submit.html"
                        }
                        break;
                    }
                }
                if (!bStop) {
                    user.id = userArr[userArr.length - 1].id + 1
                    user.phone = num
                    userArr.push(user)
                    if (confirm("你已经注册成功")) {
                        location.href = "index.html"
                        localStorage.userNow = user.id
                    }
                }
            } else {
                user.id = 1
                user.phone = num;
                userArr.push(user)
                if (confirm("你已经注册成功")) {
                    location.href = "index.html"
                    localStorage.userNow = user.id
                }
            }
            localStorage.users = JSON.stringify(userArr)
        } else {
            alert(
                "请输入正确的手机号"
            )
        }

    })
}
export default {
    render
}

