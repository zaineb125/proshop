import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Row,
  Col,
  listGroup,
  Image,
  Card,
  ListGroup,
} from "react-bootstrap";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps.js";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />

      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address : </strong>
                {cart.shippingAddress.address} ,{cart.shippingAddress.city},
                {cart.shippingAddress.postalCode}, ,
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method : </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
                <listGroup.Item>
                    <h2>Order Summary</h2>
                </listGroup.Item>
                <listGroup.Item>
                    <Row>
                        <Col>Items</Col>
                        <Col>${cart.itemsPrice}</Col>
                    </Row>
                </listGroup.Item>
                <listGroup.Item>
                    <Row>
                        <Col>Shipping</Col>
                        <Col>${cart.shippingPrice}</Col>
                    </Row>
                </listGroup.Item>
                <listGroup.Item>
                    <Row>
                        <Col>Tax</Col>
                        <Col>${cart.itemsPrice}</Col>
                    </Row>
                </listGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
