import React, { Component } from "react";
import Moment from "moment";
import OrderLine from "./OrderLine";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export class Order extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="bg-dark text-white">
          Order from {Moment(this.props.order.date).format("d MMM")}
        </h3>
        <Link className="btn btn-info" to={`/edit/${this.props.order.id}`}>
          Edit
        </Link>
        <ListGroup>
          {this.props.order.orderLines.map((orderLine, i) => {
            return (
              <ListGroup.Item key={i}>
                <OrderLine key={i} orderLine={orderLine} />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Order;
