import submitController from './controlllers/submit' 
import numberController from './controlllers/number'
import messageController from './controlllers/message'
import Router from "./utils/router"

submitController.render()

const router = new Router()
router.init()
router.route('#number',numberController.render)
router.route('#message',messageController.render)