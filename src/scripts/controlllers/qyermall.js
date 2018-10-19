import qyermallTpl from '../views/qyermall.html'
import qyermallModel from '../models/qyermall'

const render = async () => {
    let result = await qyermallModel.list();
    let list = result.data.films;
    let template = Handlebars.compile(qyermallTpl);
    let html = template({ list })
    $("#Mall").html(html);
    changeTab();
    autoPlay();
}

const changeTab = () => {
    $('.footer ul li').on('tap',function () {
        let hashs = ['#hapge','#dest','#mine']
        location.hash = hashs[$(this).index()]
        $(this).addClass('active').siblings().removeClass('active')
    })
}

 const autoPlay = () => {
    console.log(2)
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', 
        loop: true, // 循环模式选项
        autoplay:true,
        autoplay:{
            disableOnInteraction:false,
            delay:2000
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
      })
 }

export default {
    render
}