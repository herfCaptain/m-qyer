import Router from './utils/router'
import serverController from './controlllers/server'
import evaluateController from './controlllers/evaluate'

serverController.render()

const router = new Router()
router.init()
router.route('#evaluate', evaluateController.render)