import { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.model === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.type}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={`http://localhost:8000/${singleCarItem.images_data}`} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.model}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.rental_price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span >
                      <i className="ri-star-s-fill" style={{ color: `${singleCarItem.rating >= 1 ? '#f9a826' : 'gray' }` }}></i>
                      <i className="ri-star-s-fill" style={{ color: `${singleCarItem.rating >= 2 ? '#f9a826' : 'gray' }` }}></i>
                      <i className="ri-star-s-fill" style={{ color: `${singleCarItem.rating >= 3 ? '#f9a826' : 'gray' }` }}></i>
                      <i className="ri-star-s-fill" style={{ color: `${singleCarItem.rating >= 4 ? '#f9a826' : 'gray' }` }}></i>
                      <i className="ri-star-s-fill" style={{ color: `${singleCarItem.rating >= 5 ? '#f9a826' : 'gray' }` }}></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>
                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.type}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.energy_type}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-calendar-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.year}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.seats_number}
                  </span>
                </div>
              </div>
            </Col>
            <Link to="/Checkout" className="text-decoration-none">
              <span className="d-flex justify-content-center">
                <Button variant="contained">Rent</Button>
              </span>
            </Link>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
