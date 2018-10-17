import productTpl from '../views/product.html'
import productModel from '../models/index-products'

const render = async () => {
	 let result=await productModel.productlist();
	 
  let list=JSON.parse(result).data;
  list=[list[0],list[1],list[2],list[3]]
  //console.log(list)
  let template = Handlebars.compile(productTpl);
  let html    = template({list});
  $('.index-product').html(html)
  picload();
}
const picload=()=>{
	$(".index-product").ready(function(){
		console.log("aa");
		echo.init({
		     offset: 0,
		　　 throttle: 1000
		}); 
		echo.render();
	})
	
}
export default {
  render
}
