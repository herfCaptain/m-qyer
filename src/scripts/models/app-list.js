const list = ()=>{
    return $.ajax({
        url: '/z/ajaxGetProductsTabs?ajaxID=5af136fdae8bfd4e7106d507&lid=114371&country_codes=',
        success: (result) => {
          return result; 
        }
    })
}

export default {
  list,
}