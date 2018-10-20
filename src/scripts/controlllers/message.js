import messageTpl from '../views/message.html'
const render = ()=>{
    document.querySelector("footer").innerHTML = messageTpl;
}
export default{
    render
}