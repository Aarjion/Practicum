const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController{
    async create(req, res, next){
        try {
            let {nameProduct, price, info, categoryIdCategory} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info){
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        idProduct: product.id
                    })
                )
            }
            const product = await Product.create({nameProduct, price, categoryIdCategory, img:fileName})

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async remove(req, res, next){
        try{
            await Product.destroy({
                where: {
                idProduct : req.params.idProduct
                }
            })
            res.status(200).json({
                message: "Товар был удалён"
            })
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    // async update(req, res, next){
    //     try{
    //             await Product.update({
    //             nameProduct: req.body.nameProduct,
    //             price: req.body.price,
    //             categoryIdCategory: req.body.categoryIdCategory,
    //             img: req.body.img
    //         },
    //     {
    //             where: {idProduct: req.body.idProduct}
    //             })
    //     } catch (e){
    //         next(ApiError.badRequest(e.message))
    //     }
    // }
    //


    async getAll(req, res){
        let {categoryIdCategory, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if (!categoryIdCategory){
            products = await Product.findAndCountAll({limit,offset})
        }
        if (categoryIdCategory){
            products = await Product.findAndCountAll({where:{categoryIdCategory},limit,offset})
        }
        return res.json(products)

    }

    async getOne(req, res){
        const {idProduct} = req.params
        const product = await Product.findOne(
            {
                where:{idProduct},
                include: [{model:ProductInfo, as:'info'}]
            },
        )
        return res.json(product)
    }
}


module.exports = new ProductController()

