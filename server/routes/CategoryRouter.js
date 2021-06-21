const Router = require('express')
const router = new Router()
const CategoryController = require('../controllers/CategoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), CategoryController.create)
router.delete('/:idCategory', CategoryController.remove)
router.get('/', CategoryController.getAll)

module.exports = router