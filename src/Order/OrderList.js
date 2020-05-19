import React, { Component } from "react";
import axios from "axios";
import Order from "./Order";

export class OrderList extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8000/orders").then((res) => {
      const orders = res.data;
      this.setState({ orders: orders });
    });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order, i) => {
          return <Order key={i} order={order} />;
        })}
      </div>
    );
  }
}

export default OrderList;
