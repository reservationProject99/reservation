import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import '../styles/CarLLII.css'

const CarListing = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedEnergyType, setselectedEnergyType] = useState("");
  const [search, setSearch] = useState("");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleEnergyTypeChange = (event) => {
    setselectedEnergyType(event.target.value);
  };

  const filteredCars = carData.filter((car) => {
    if (selectedBrand && car.type !== selectedBrand) {
      return false;
    }
    if (selectedType && car.usage !== selectedType) {
      return false;
    }
    if (selectedEnergyType && car.energy_type !== selectedEnergyType) {
      return false;
    }
    if (search && !car.model.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (selectedPrice === "low" && car.rental_price > 50) {
      return false;
    }
    if (selectedPrice === "high" && car.rental_price <= 50) {
      return false;
    }
    return true;
  });

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center mb-5">
                <div style={{ position: "relative", width: "50%" }}>
                  <input
                    style={{
                      borderRadius: "5px",
                      borderStyle: "hidden",
                      boxShadow: "-1px 1px 4px 1px lightgrey",
                      width: "100%",
                      padding: "0.5rem 2rem 0.5rem 1rem",
                      backgroundColor: "#f2f2f2",
                    }}
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span style={{ position: "absolute", top: "50%", right: "0.5rem", transform: "translateY(-50%)" }}>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>

            </Col>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="row d-flex align-items-center gap-2 mb-1">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleBrandChange} value={selectedBrand} className="select__group">
                  <option value="">Select Brand</option>
                  <option value="tesla">Tesla</option>
                  <option value="toyota">Toyota</option>
                  <option value="ferrari">Ferrari</option>
                </select>
                <select onChange={handleTypeChange} value={selectedType} className="select__group">
                  <option value="">Select Type</option>
                  <option value="sport">Sport</option>
                  <option value="bus">Bus</option>
                  <option value="truck">Truck</option>
                  <option value="car">Family Car</option>
                </select>
                <select
                  onChange={handleEnergyTypeChange}
                  value={selectedEnergyType}
                  className="select__group"
                >
                  <option value="">Select Energy Type</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                  <option value="Gas">Gas</option>
                </select>

                <select onChange={handlePriceChange} value={selectedPrice} className="select__group">
                  <option value="">Select Price</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>
            {filteredCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
