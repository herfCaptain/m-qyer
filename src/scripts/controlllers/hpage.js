import hpageTpl from '../views/hpage.html'
import hpageModel from '../models/qyermall'

const render = async () => {
    let result = await hpageModel.list()
    let list = JSON.parse(result).data;
    let template = Handlebars.compile(hpageTpl);
    let html = template({ list })
    $("main").html(html)
}

export default {
    render
}