import React from "react";
import { Carousel } from "react-bootstrap";

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.medradigital.com/wp-content/uploads/2017/07/E-commerce.jpg"
          style={{ height: "90vh" }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{}}>Welcome to ProShop</h3>
          <p style={{ fontWeight: "bold", color: "black" }}>
            Here you can buy the newest products with the best prices .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.amtsolutions.fr/wp-content/uploads/2018/05/photo-ecommerce.png"
          alt="Second slide"
          style={{ height: "90vh" }}
        />

        <Carousel.Caption>
          <h3 style={{ fontWeight: "bold" }}>Welcome to ProShop</h3>
          <p style={{ fontWeight: "bold", color: "black" }}>
            Here you can buy the newest products with the best prices .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i1.wp.com/digitiz.fr/wp-content/uploads/2020/09/Images-gratuites-ecommerce.jpg?fit=1100%2C550&ssl=1"
          alt="Second slide"
          style={{ height: "90vh" }}
        />

        <Carousel.Caption>
          <h3 style={{ fontWeight: "bold" }}>Welcome to ProShop</h3>
          <p style={{ fontWeight: "bold", color: "black" }}>
            Here you can buy the newest products with the best prices .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
