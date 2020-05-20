import React, { Component } from "react";
import axios from "axios";
import Order from "./Order";

export class OrderList extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    this._isMounted = true;

    axios.get("http://localhost:8000/orders").then((res) => {
      const orders = res.data;
      if (this._isMounted) {
        this.setState({ orders: orders });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
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
