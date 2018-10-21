import searchTpl from '../views/search.html'
import searchrealTpl from '../views/search-real.html'
import searchresTpl from '../views/search-res.html'
import searchResModel from '../models/index-search'
const render = () => {
  $('.index-search').html(searchTpl)
  searchclick();
 
}
const searchclick= function(){
	$(".index-search>input").on("click",function(){
		$(".search-real").css("display","block");
		$('.search-real').html(searchrealTpl)
    search_begin();
    back();
	})
	
}
const search_begin=  function(){
	$(".search-begin").on("click",async function(){
		let keyword=$(".search-input").val();
		let result=await searchResModel.searchlist(keyword);
		//console.log(result)
		let list=JSON.parse(result).data;
	  let template = Handlebars.compile(searchresTpl);
	  let html= template({list});
	  $('.search-res-list').html(html)
	})
	
}
const back= function () {
	$(".back").on("click",function(){
		$(".search-real").css("display","none");
	})
}

export default {
  render
}