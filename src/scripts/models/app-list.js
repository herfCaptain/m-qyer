
const list =async ()=>{
  let id=location.href.split("?")[1];
  // let result=await productModel.productlist();
	// let lista=JSON.parse(result).data;
	// for(var i in lista){

	// 	if(lista[i].id==id){
	// 		// console.log(list[i].title);
	// 		$(".top").text(lista[i].title);
			
	// 	}
	// }
    return $.ajax({
        url: '/z/ajaxGetProductsTabs?ajaxID=5af136fdae8bfd4e7106d507&lid='+id+'&country_codes=',
        success: (result) => {
          return result; 
        }
    })
}

export default {
  list,
}