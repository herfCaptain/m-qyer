import signUpTpl from '../views/signUp.html'
const render = ()=>{
    // document.querySelector("#root").firstChild.innerHTML += messageTpl
    
    document.querySelector("#box").innerHTML = signUpTpl;
    console.log( document.querySelector("#box"))
}
export default{
    render
}