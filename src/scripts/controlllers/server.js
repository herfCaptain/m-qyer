import serverTpl from '../views/qyerserver.html'
import serverModel from '../models/qyerserver'

const render = async() => {
    let result = await serverModel.list();
    let list = result.data.films;
    let template = Handlebars.compile(serverTpl);
    console.log(list)
    Sele(list,template); 
    checkAll();
}

const Sele = (list,template) => {
    var id = location.href.split("#")[1];
    for(var i=0;i<list.length;i++){
        if(id == list[i].id){
            let list1 = [{price:list[i].id,img:list[i].cover.origin,tit:list[i].intro}]
            let html = template({ list1 })
            $("#Server").html(html);
        }
    }
}

const checkAll = () => {
    console.log(1)
    var a = location.href
    console.log(a)
    $('.checkAll>a').on("click",function(){
        console.log(2)
        let hashs = ['#evaluate']
        location.hash = hashs[$(this).index()]
    })
}

export default {
    render
}