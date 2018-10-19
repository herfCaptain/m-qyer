import serverTpl from '../views/qyerserver.html'
import serverModel from '../models/qyerserver'
import qyerserverorderTpl from '../views/qyerserver-order.html'

const render = async() => {
    let result = await serverModel.list();
    let list = result.data.films;
    let template = Handlebars.compile(serverTpl);
    let template1 = Handlebars.compile(qyerserverorderTpl);
    console.log(list)
    Sele(list,template,template1); 
    checkAll();
}

const Sele = (list,template,template1) => {
    var id = location.href.split("#")[1];
    for(var i=0;i<list.length;i++){
        if(id == list[i].id){
            let list1 = [{price:list[i].id,img:list[i].cover.origin,tit:list[i].intro}]
            let html = template({ list1 })
            let html1 = template1({ list1 })
            console.log(html)
            console.log(html1)
            $("#Server").html(html);
            $('.order').html(html1)
        }
    }
}

// const order = (list1) => {
//     var b = location.href
//     console.log(b)
//     $("order>span>a").on("click",function(b,list1){
//         location.href = b + '&id=list1[0].price'
//         console.log(1)
//     })
// }

const checkAll = () => {
    var a = location.href
    $('.checkAll>a').on("click",function(){
        let hashs = ['#evaluate']
        location.hash = hashs[$(this).index()]
    })
}

export default {
    render
}