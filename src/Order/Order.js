import React, { Component } from "react";
import Moment from "moment";
import OrderLine from "./OrderLine";

export class Order extends Component {
  render() {
    return (
      <div>
        <h2>Order from {Moment(this.props.order.date).format("d MMM")}</h2>
        {this.props.order.orderLines.map((orderLine, i) => {
          return <OrderLine key={i} orderLine={orderLine} />;
        })}
      </div>
    );
  }
}

export default Order;
