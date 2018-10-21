import appListModel from '../models/app-list';
import listTpl from '../../../src/list.html'

const render = async () => {
    let data =JSON.parse((await appListModel.list())).data;
    await renderData(data)
  }


// appListModel.list().then((result) =>{
//     console.log(JSON.parse(result).data)
// })

const renderData = async (data) => {
    let template = Handlebars.compile(listTpl)
    let html = template({ data })
    $('#root').html(html)
  }

export default{
    render
}

