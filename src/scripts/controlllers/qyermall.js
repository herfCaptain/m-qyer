import qyermallTpl from '../views/qyermall.html'
import qyermallModel from '../models/qyermall'

const render = async () => {
    let result = await qyermallModel.list();
    let list = JSON.parse(result).data;
    let template = Handlebars.compile(qyermallTpl);
    let html = template({ list })
    $("#Mall").html(html);
    changeTab();
}

const changeTab = () => {
    $('.footer ul li').on('tap',function () {
        let hashs = ['#hapge','#dest','#mine']
        location.hash = hashs[$(this).index()]
        $(this).addClass('active').siblings().removeClass('active')
    })
}

export default {
    render
}