import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import axios from "axios";
import { useEffect, useState } from "react";

function ProviderUplodedCar() {
  const [carsArray, setCarsArray] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedEnergyType, setselectedEnergyType] = useState("");

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
  const filteredCars = carsArray.filter((car) => {
    if (
      selectedBrand &&
      car.model.toUpperCase() !== selectedBrand.toUpperCase()
    ) {
      return false;
    }
    if (selectedType && car.type.toUpperCase() !== selectedType.toUpperCase()) {
      return false;
    }
    if (
      selectedEnergyType &&
      car.energy_type.toUpperCase() !== selectedEnergyType.toUpperCase()
    ) {
      return false;
    }
    if (selectedPrice === "low" && car.rental_price >= 50) {
      return false;
    }
    if (selectedPrice === "high" && car.rental_price < 50) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((response) => {
        setCarsArray(response.data.map((e) => e));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Helmet title="Cars">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select
                  onChange={handleBrandChange}
                  value={selectedBrand}
                  className="select__group"
                >
                  <option value="">Select Brand</option>
                  <option value="BMW">BMW</option>
                  <option value="TOYOTA">TOYOTA</option>
                  <option value="FERRARI">FERRARI</option>
                </select>
                <select
                  onChange={handleTypeChange}
                  value={selectedType}
                  className="select__group"
                >
                  <option value="">Select Type</option>
                  <option value="Luxury Car">Luxury Car</option>
                  <option value="Vintage Car">Vintage Car</option>
                  <option value="Family Car">Family Car</option>
                  <option value="Off Road">Off Road</option>
                  <option value="Van">Van</option>
                </select>
                <select
                  onChange={handleEnergyTypeChange}
                  value={selectedEnergyType}
                  className="select__group"
                >
                  <option value="">Energy Type...</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </select>

                <select
                  onChange={handlePriceChange}
                  value={selectedPrice}
                  className="select__group"
                >
                  <option value="">Select Price</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </div>

            {filteredCars.map((item) => (
              <div className="col-lg-4 col-md-4 col-sm-6 mb-5" key={item.model}>
                <div className="car__item" style={{ backgroundColor: "white" }}>
                  <div className="car__img w-100">
                    <img src={item.images_data} alt="" className="w-100" />
                  </div>

                  <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{item.model}</h4>
                    <h6 className="rent__price text-center mt-">
                      ${item.rental_price}.00 <span>/ Day</span>
                    </h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                      <span className="d-flex align-items-center gap-1">
                        <i className="ri-car-line"></i> {item.type}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <i className="ri-settings-2-line"></i>{" "}
                        {item.energy_type}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <i className="ri-timer-flash-line"></i>
                        {item.year}
                      </span>
                    </div>

                    <button className="w-50 car__item-btn car__btn-rent">
                      <Link to={`/cars/${item.model}`}>Edit</Link>
                    </button>

                    <button className="w-50 car__item-btn car__btn-details">
                      <Link to={`/cars/${item.model}`}>Delete</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Helmet>
    </>
  );
}

export default ProviderUplodedCar;
