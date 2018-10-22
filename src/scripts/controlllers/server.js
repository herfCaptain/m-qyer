import serverTpl from '../views/qyerserver.html'
import productModel from '../models/index-products'

const render =async () => {
    $("#Server").html(serverTpl);
    let id=location.href.split("?")[1];
    console.log(id);
    let result=await productModel.productlist();
	let list=JSON.parse(result).data;
	for(var i in list){
		if(list[i].id==id){
			console.log(list[i].title);
			$("header h1").text(list[i].title);
			$(".info>.price").html(list[i].price);
			$(".browse").text("浏览"+list[i].views);
			$(".sold").text("已售"+list[i].supplierid+"份");
			
		}
	}
    
}

export default {
    render
    
}