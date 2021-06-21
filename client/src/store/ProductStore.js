import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [
            {idCategory: 1, nameCategory: 'Головные уборы'},
            {idCategory: 2, nameCategory: 'Фурнитура'},
            {idCategory: 3, nameCategory: 'Сувениры'}
        ]
        makeAutoObservable(this)

        this._products = [
            {idProduct: 3, nameProduct:'Фуражка полиции', price: 5000, img:'425a98fb-2824-44d4-b9bd-5f540dce103f.jpg', categoryIdCategory: 1},
            {idProduct: 4, nameProduct:'Кокарда орех МВД', price: 200, img:'df1214fd-f518-437e-a198-d50daa01e5fe.jpg', categoryIdCategory: 2},
            {idProduct: 6, nameProduct:'Кружка Гаишник', price: 1000, img:'344bd8e6-7fb6-4df8-ba5c-f296030a75df.jpg', categoryIdCategory: 3},
        ]
    }

    setCategory(categories) {
        this._categories = categories
    }
    setProducts(products){
        this._products = products
    }

    get categories(){
        return this._categories
    }
    get products(){
        return this._products
    }
}