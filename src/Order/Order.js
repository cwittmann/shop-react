import React, { Component } from "react";
import Moment from "moment";
import OrderLine from "./OrderLine";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export class Order extends Component {
  state = {
    orderLines: [],
  };

  componentDidMount() {
    this._isMounted = true;

    axios
      .get("http://localhost:8000/orderLinesOfOrder/" + this.props.order.id)
      .then((res) => {
        if (this._isMounted) {
          this.setState({ orderLines: res.data });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            Order from {Moment(this.props.order.date).format("d.M.YYYY")}{" "}
            {" - "}
            {this.props.order.status}
          </Card.Title>

          <ListGroup>
            {this.state.orderLines.map((orderLine, i) => {
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
