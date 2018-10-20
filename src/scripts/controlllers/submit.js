import submitTpl from '../views/submit.html'

const render = ()=>{
    document.querySelector("#Submit").innerHTML = submitTpl
    changeTab()
}

const changeTab = () =>{
    $('main>.select>div').on('tap',function(){
        let hashs = ['#number','#message']
        location.hash = hashs[$(this).index()]
        $('.select div')
        .eq($(this).index())
        .addClass("active").siblings().removeClass('active');
    }) 
}
export default{
    render
} 