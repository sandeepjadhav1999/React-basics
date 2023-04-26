import React, { Component } from "react";

export default class Product extends Component {
    state= {product: this.props.product}
    render() {
        return (
            <div className="col-lg-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            Product {this.state.product.id}
                            <span className="pull-right" onClick={()=>{this.props.onDelete(this.state.product)}}>
                                <i className="fa fa-times"></i>    
                            </span>
                        </h5>
                        <h3 className="card-text">{this.state.product.name}</h3>
                        <h5>${this.state.product.price}</h5>
                    </div>
                    <div className="card-footer">
                        <div className="float-left">
                            <span className="pr-2">{this.state.product.quantity}</span>
                            <button className="btn btn-outline-success" onClick={()=>{this.props.onIncrement(this.state.product,10)}}>+</button>
                            <button className="btn btn-outline-success" onClick={()=>{this.props.onDecrement(this.state.product,0)}}>-</button>
                        </div>
                        <div className="float-right">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}