const list = () => {
    
    return $.ajax({
        url:"/qcross/home/index/recommendbiz?page=1",
        success:(result)=>{
            return result;
        }
    })
}

export default{
    list
}