import React,{ Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component{

    state = {products:[
        {id:1, name:"Iphone",quantity:1,price:1200},
        {id:2, name:"Samsung",quantity:0,price:1200},
        {id:3, name:"Sony",quantity:4,price:1200},
        {id:4, name:"HRX",quantity:7,price:1200},
        {id:5, name:"BlackBerry",quantity:0,price:1200},
        {id:6, name:"Nokia",quantity:9,price:1200},
        {id:7, name:"Mi",quantity:10,price:1200}
    ]}

    handleIncrement = (product, maxValue)=>{
        let allProduct =[...this.state.products]
        let index = allProduct.indexOf(product)
        if (product.quantity < maxValue){
            allProduct[index].quantity++
            this.setState({products:allProduct})
        }
    }

    handleDecrement= (product,minValue)=>{
        let allProduct =[...this.state.products]
        let index = allProduct.indexOf(product)
        if (product.quantity > minValue){
            allProduct[index].quantity--
            this.setState({products:allProduct})
        }
    }

    handleDelete = (product)=>{
        let allProduct = [...this.state.products]
        let index = allProduct.indexOf(product)
        allProduct.splice(index, 1)
        this.setState({products : allProduct})
    }

    render(){
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map((prod)=>{
                        return (
                        <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                            <button className="btn btn-primary">Buy now</button>
                        </Product>
                        )
                    })}
                </div>
            </div>
        )
    }
}