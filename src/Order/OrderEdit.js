import React, { Component } from "react";
import axios from "axios";
import Order from "./Order";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class OrderEdit extends Component {
  state = {
    order: {},
  };

  componentDidMount() {
    let id = this.props.match.params.id;

    axios.get("http://localhost:8000/orders/" + id).then((res) => {
      const order = res.data;
      this.setState({ order: order });
    });
  }

  render() {
    return (
      <div>
        <h1>Edit Order</h1>
        <Form>
          <Form.Group controlId="formId">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={this.state.order.id || ""}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="formUserId">
            <Form.Label>UserId</Form.Label>
            <Form.Control
              type="text"
              name="userId"
              defaultValue={this.state.order.userId || ""}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              defaultValue={this.state.order.date || ""}
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              name="status"
              defaultValue={this.state.order.status || ""}
            />
          </Form.Group>
          <Form.Group controlId="formOrderLines">
            <Form.Label>Order Lines</Form.Label>
            <Form.Control
              type="text"
              name="orderLines"
              defaultValue={this.state.order.orderLines || ""}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default OrderEdit;
