import positionTpl from '../views/position.html'
import positionModel from '../models/position'
const render = async () => {
 // document.querySelector('main').innerHTML = positionTpl;
  let result=await positionModel.list();
  let list=result.content.data.page.result;
  console.log(list)
  let template = Handlebars.compile(positionTpl);
  let html    = template({list});
  $('main').html(html);
  //console.log(html)
}

export default {
  render
}