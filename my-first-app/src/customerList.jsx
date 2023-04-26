import React, { Component } from "react";

class CustomerList extends Component {
    state = {
        customerName: "Component",
        customerCount: 5,
        customer: [
            { id: 1, name: 'sandeep', ph: '771wbef23456', address: { city: "Bangalore" } },
            { id: 2, name: 'saneep', ph: '77123dgn456', address: { city: "Bangalore" } },
            { id: 3, name: 'sadfbdfdeep', ph: 'dgnhtm', address: { city: "Bangalore" } },
            { id: 4, name: 'sandrnr', ph: null, address: { city: "Bangalore" } },
            { id: 5, name: 'sanetmyuktynws', ph: '77179867523456', address: { city: "Bangalore" } },
            { id: 6, name: 'etumetd', ph: null, address: { city: "Bangalore" }, }
        ]
    }

    onRefersh = () => {
        this.setState({
            customerCount: 7
        })
    }

    getPhoneNumber = (phone) => {
        if (phone) {
            return phone
        } else {
            return <div className="text-warning">no Phone</div>
        }
    }

    customerDataTable = () => {
        return (this.state.customer.map((data) => {
            return (
                <tr key={data.id}>
                    <th>{data.id}</th>
                    <td>{data.name}</td>
                    <td>{this.getPhoneNumber(data.ph)}</td>
                    <td>{data.address.city}</td>
                </tr>
            )
        }))

    }

    render() {
        return (
            <React.Fragment>
                <h3 className="border-bottom m-1 p-1">
                    {this.state.customerName}
                    <span className="badge badge-primary m-2">
                        {this.state.customerCount}
                    </span>
                    <button className="btn btn-success" onClick={this.onRefersh}>Refersh</button>
                </h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.customerDataTable()}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default CustomerList