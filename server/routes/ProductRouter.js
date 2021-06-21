const Router = require('express');
const router = new Router();
const ProductController = require('../controllers/ProductController');
const checkRole = require('../middleware/checkRoleMiddleware2');

// const db = require('../models/models');
// const express = require("express");
// const router1 = express.Router();
//
// router1.put("/edit",(req,res) => {
//     db.Product.update(
//         {
//             nameProduct: req.body.nameProduct,
//             price: req.body.price,
//             categoryIdCategory: req.body.categoryIdCategory,
//             img: req.body.img
//         },
//         {
//             where: {idProduct: req.body.idProduct}
//         }
//     ).then(() => res.send("success"))
// })

router.post('/', checkRole('ADMIN'), ProductController.create)
router.delete('/:idProduct', ProductController.remove)
// router.put('/edit/:idProduct', ProductController.update)
router.get('/', ProductController.getAll)
router.get('/:idProduct', ProductController.getOne)


module.exports = router