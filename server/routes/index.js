const Router = require('express')
const router = new Router()

const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const CategoryRouter = require('./CategoryRouter')
// const UserInfoRouter = require('./UserInfoRouter')
// const ProductInfoRouter = require('./ProductInfoRouter')
// const OrderRouter = require('./OrderRouter')
// const FavoritesRouter = require('./FavoritesRouter')
// const FavoritesProductRouter = require('./FavoritesProductRouter')
// const BasketRouter = require('./BasketRouter')
// const BasketProductRouter = require('./BasketProductRouter')

router.use('/User', UserRouter)
router.use('/Product', ProductRouter)
router.use('/Category', CategoryRouter)
// router.use('/UserInfo', UserInfoRouter)
// router.use('/ProductInfo', ProductInfoRouter)
// router.use('/Order', OrderRouter)
// router.use('/Favorites', FavoritesRouter)
// router.use('/FavoritesProduct', FavoritesProductRouter)
// router.use('/Basket', BasketRouter)
// router.use('/BasketProduct', BasketProductRouter)


module.exports = router
