const list = () => {
    
    return $.ajax({
        url:"/v4/api/film/now-playing?page=1&count=7",
        success:(result)=>{
            return result;
        }
    })
}

export default{
    list
}