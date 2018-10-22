import messageTpl from '../views/message.html'
const render = () => {
    document.querySelector("footer").innerHTML = messageTpl;
    var mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
    $(".login").click(function () {
        var num = $("#phone").val()
        if (mobile.test(num)) {

            if (localStorage.users) {
                var userArr = JSON.parse(localStorage.users)
                for (var i = 0; i < userArr.length; i++) {
                    if (num == userArr[i].phone) {
                        if (confirm("登录成功，返回首页")) {
                            location.href = "index.html"
                        }
                    } else {
                        confirm("账号不存在，请注册")
                    }
                }
            } else {
                if (confirm("账号不存在，请注册")) {
                    location.href = "signUpBox.html"
                }
            }
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