import signUpTpl from '../views/signUp.html'
import signUpHeadTpl from '../views/signUpHead.html'
const render = ()=>{
    // document.querySelector("#root").firstChild.innerHTML += messageTpl
    document.querySelector("#box").innerHTML = signUpTpl;
    document.querySelector("#head").innerHTML = signUpHeadTpl;
}
export default{
    render
}

