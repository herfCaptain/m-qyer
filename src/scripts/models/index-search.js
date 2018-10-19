const searchlist=(keyword)=>{
	const date1=new Date()
	
	return $.ajax({
//url:"/api/listmore.json?pageNo=2&pageSize=15",
//http://www.qyer.com/qcross/home/index/recommendbiz?page=1
		url:"/search/ajax.php?action=ajaxsearch&wd="+keyword+"&popsearch=1",
		success:(result)=>{
			return result;
		},
		error:(err)=>{
			console.log(err)
		}
	});
}

export default{
	searchlist
}
