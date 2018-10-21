import homeTpl from "../views/home.html"
const render = () => {
	document.querySelector("#root").innerHTML=homeTpl;
	if(localStorage.userNow){
		$(".userinfo>a>span").text("ID:"+localStorage.userNow)
	}else{
		$(".userinfo>a>span").text("登录")
	}
	
	//scroll();
	
}
//const scroll=()=>{
//	 let scroll = new BScroll('.home-containers',{
//	    scrollY: true,
//	    click: true
//	})
////	 posScroll.on('scroll',function(){
////	 	let y=this.y,
////	 	maxY=this.maxScrollY-y;
////	 	console.log(y,maxY);
////	 	
////	 })
//	 
//}
export default{
	render
}
