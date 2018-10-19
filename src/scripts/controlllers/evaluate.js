import evaluateTpl from '../views/evaluate.html'

const render = () => {
    $(".server-containers").html(evaluateTpl);
}

export default {
    render
}