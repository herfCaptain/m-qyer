import Router from './utils/routermall'
import hpageController from './controlllers/hpage'
import destController from './controlllers/dest'
import mineController from './controlllers/mine'
import qyermallController from './controlllers/qyermall'

qyermallController.render()

const router = new Router()
router.init()
router.route('#hapge', hpageController.render)
router.route('#dest', destController.render)
router.route('#mine', mineController.render)