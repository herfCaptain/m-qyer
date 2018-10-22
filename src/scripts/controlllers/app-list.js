import appListModel from '../models/app-list';
import listTpl from '../../../src/list.html'
import productModel from '../models/index-products'
const render = async () => {
    let data =JSON.parse((await appListModel.list())).data;
    await renderData(data)
  }


// appListModel.list().then((result) =>{
//     console.log(JSON.parse(result).data)
// })

const renderData = async (data) => {
    let template = Handlebars.compile(listTpl)
    let html = template({ data })
    $('#root').html(html)
    let id=location.href.split("?")[1];
  let result=await productModel.productlist();
	let lista=JSON.parse(result).data;
	for(var i in lista){

		if(lista[i].id==id){
			// console.log(list[i].title);
			$(".top").text(lista[i].title);
			
		}
	}
  }

export default{
    render
}

