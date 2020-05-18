import React, { Component } from "react";
import axios from "axios";

export class OrderLine extends Component {
  state = {
    productName: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/products/" + this.props.orderLine.productId)
      .then((res) => {
        const product = res.data;
        this.setState({ productName: product.name });
      });
  }

  render() {
    return (
      <div>
        <h3>
          {this.state.productName} -{this.props.orderLine.amount} item(s){" "}
        </h3>
      </div>
    );
  }
}

export default OrderLine;
