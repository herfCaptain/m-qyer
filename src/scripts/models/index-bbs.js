const bbslist=()=>{
	return $.ajax({
//		url:"/api/listmore.json?pageNo=2&pageSize=15",
//http://www.qyer.com/qcross/home/index/recommendbiz?page=1
		url:"/qcross/home/ajax?action=thread&timer=1539683491162&ajaxID=59b60840cebeb65c188239a8",
		success:(result)=>{
			//console.log(result)
			return result;
		}
	});
}

export default{
	bbslist
}
