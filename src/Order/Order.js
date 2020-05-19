import React, { Component } from "react";
import Moment from "moment";
import OrderLine from "./OrderLine";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export class Order extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            Order from {Moment(this.props.order.date).format("d MMM")} {" - "}
            {this.props.order.status}
          </Card.Title>

          <ListGroup>
            {this.props.order.orderLines.map((orderLine, i) => {
              return (
                <ListGroup.Item key={i}>
                  <OrderLine key={i} orderLine={orderLine} />
                </ListGroup.Item>
              );
            })}
          </ListGroup>

          <Link className="btn btn-info" to={`/edit/${this.props.order.id}`}>
            Edit
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Order;
