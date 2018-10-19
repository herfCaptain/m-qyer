import numberTpl from '../views/number.html'
const render = ()=>{
    document.querySelector("footer").innerHTML = numberTpl;
}
export default {
    render
}