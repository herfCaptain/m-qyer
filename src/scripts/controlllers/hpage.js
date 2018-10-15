import hpageTpl from '../views/hpage.html'
import hpageModel from '../models/qyermall'

const render = async () => {
    let result = await hpageModel.list()
    let list = result.data.films;
    let template = Handlebars.compile(hpageTpl);
    let html = template({ list })
    $("main").html(html)
}

export default {
    render
}