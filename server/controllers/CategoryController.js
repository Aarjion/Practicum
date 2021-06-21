const {Category} = require('../models/models')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError');

class CategoryController{
    async create(req, res){
        const {nameCategory} = req.body
        const categoryData = await Category.create({nameCategory})
        return res.json(categoryData)
    }

    async remove(req, res, next){
        try{
            await Category.destroy({
                where:{
                    idCategory : req.params.idCategory
                }
            })
            // await Category.remove({id: req.params.id})
            // await Product.remove({Category: req.params.id})
            res.status(200).json({
                message: 'Категория удалена!'
            })
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const categories = await Category.findAll()
        return res.json(categories)
    }
}
module.exports = new CategoryController()