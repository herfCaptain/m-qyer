import bbsTpl from '../views/index-bbs.html'
import bbsModel from '../models/index-bbs'
var datasource = []
var pageNo = 0
const render = async () => {
  
   let result=await bbsModel.bbslist();
	// console.log(result)
  let list=JSON.parse(result).data[pageNo];
  datasource=list; 
  await renderList(list);
  
  await loadmore(result);
  await picload();
}
const loadmore=  (result)=>{
	
	$(document).on('click', '.more-bbs', async function(e){
		console.log("cc")
		if(pageNo<4){
				let list=JSON.parse(result).data[++pageNo];
	  //console.log(lista);
	    list=datasource=[...datasource,...list];
	    await renderList(list);
	    await picload();
		}else{
			//页面跳转
		}
		
	})

}
const renderList = async (list) => {
  let template = Handlebars.compile(bbsTpl)
  let html = template({ list })
  $('.index-bbs').html(html)
  
}
const picload=function(){
	$(".index-bbs ").swipe(function(){
		console.log("aa");
		echo.init({
		    offset: 200,
		　　 throttle: 1000
		}); 
		echo.render();
	})
}
export default {
  render
  
}