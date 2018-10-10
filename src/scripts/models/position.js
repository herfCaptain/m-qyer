const list=()=>{
	return $.ajax({
//		url:"/api/listmore.json?pageNo=2&pageSize=15",
		url:"/api/position/list",
		success:(result)=>{
			return result;
		}
	});
}

export default{
	list
}
