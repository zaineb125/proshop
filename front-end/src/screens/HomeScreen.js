import React, { useEffect } from "react";
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import ProductBestSellers from "../components/ProductBestSellers";
import ServicesSection from "../components/ServicesSection";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { keyword } = useParams();

  const { pageNumber } = useParams() || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {!keyword && <ProductCarousel />}
      <h1 className="latest-products" style={{ color: "#0e388c" }}>
        Latest Products
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <section className="py-5 bg-light">
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          ></Paginate>
        </section>
      )}
      <h1 className="top-products" style={{ color: "#0e388c" }}>
        Top Rated Products
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <ProductBestSellers />
      )}
      <ServicesSection />
    </>
  );
};

export default HomeScreen;
