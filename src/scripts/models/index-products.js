const productlist=()=>{
	return $.ajax({
//		url:"/api/listmore.json?pageNo=2&pageSize=15",
//http://www.qyer.com/qcross/home/index/recommendbiz?page=1
		url:"/qcross/home/index/recommendbiz?page=1",
		success:(result)=>{
			//console.log(result)
			return result;
		}
	});
}

export default{
	productlist
}
