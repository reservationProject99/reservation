import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center gap-3 mb-5">
              <span className="d-flex align-items-center gap-2">
                <i className="ri-sort-asc"></i> Sort By
              </span>

              <select>
                <option>Select</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>

          {carData.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default CarListing;
