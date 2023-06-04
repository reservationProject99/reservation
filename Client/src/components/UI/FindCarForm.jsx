import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const FindCarForm = () => {

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedEnergyType, setselectedEnergyType] = useState("");

console.log(selectedBrand,selectedEnergyType,selectedPrice,selectedType);

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

  return (
    <>
      <div className="text-center pt-5">
        <h4>Find Your Car Here</h4>
      </div>
      <Form className="form">
        <div className=" d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="select__group">
            <select
            onChange={handleBrandChange}
            value={selectedBrand}
            >
              <option value="SB">Select Brand</option>
              <option value="Tesla">Tesla</option>
              <option value="toyota">Toyota</option>
              <option value="Bmw">Bmw</option>
              <option value="mitsubishi">Mitsubishi</option>
              <option value="Ford">Ford</option>
              <option value="Nissan">Nissan</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Kia">Kia</option>
            </select>
          </FormGroup>

          <FormGroup className="select__group">
            <select
            onChange={handleTypeChange}
            value={selectedType}
            >
              <option value="ST">Select Type</option>
              <option value="Van">Van</option>
              <option value="Sports">Sports</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Truck">Truck</option>
              <option value="Family Car">Family Car</option>
            </select>
          </FormGroup>

          <FormGroup className="select__group">
            <select
            onChange={handleEnergyTypeChange}
            value={selectedEnergyType}
            >
              <option value="SET">Select Energy Type</option>
              <option value="Hybrid">Hybrid</option>
              <option value="electric">Electric</option>
              <option value="Gas">Gas</option>
            </select>
          </FormGroup>

          <FormGroup className="select__group">
            <select
            onChange={handlePriceChange}
            value={selectedPrice}
            >
              <option value="">Select Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </FormGroup>
        </div>
        <div className="d-flex justify-content-center">
          <FormGroup className="form__group">
            <Link to={`/cars?brand=${selectedBrand}&type=${selectedType}&energyType=${selectedEnergyType}&price=${selectedPrice}`}>
              <button className="btn find__car-btn">Find Car</button>
            </Link>
          </FormGroup>
        </div>
      </Form>
    </>
  );
};

export default FindCarForm;