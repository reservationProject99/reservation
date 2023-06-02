import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
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
    if (selectedBrand && car.brand !== selectedBrand) {
      return false;
    }
    if (selectedType && car.type !== selectedType) {
      return false;
    }
    if (selectedEnergyType && car.EnergyType !== selectedEnergyType) {
      return false;
    }
    if (search && !car.brand.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    if (selectedPrice === "low" && car.price > 50) {
      return false;
    }
    if (selectedPrice === "high" && car.price <= 50) {
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
              <div className="mb-5">
                <input
                  style={{
                    borderRadius: "5px",
                    borderStyle: "hidden",
                    boxShadow: "-1px 1px 4px 1px lightgrey",
                    width: "50%",
                    backgroundColor: "#f2f2f2",
                  }}
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />{" "}
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleBrandChange} value={selectedBrand}>
                  <option value="">Select Brand</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Ferrari">Ferrari</option>
                </select>
                <select onChange={handleTypeChange} value={selectedType}>
                  <option value="">Select Type</option>
                  <option value="Sport">Sport</option>
                  <option value="Bus">Bus</option>
                  <option value="Truck">Truck</option>
                  <option value="Car">Family Car</option>
                </select>
                <select
                  onChange={handleEnergyTypeChange}
                  value={selectedEnergyType}
                >
                  <option value="">Select Energy Type</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                  <option value="Gas">Gas</option>
                </select>

                <select onChange={handlePriceChange} value={selectedPrice}>
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
