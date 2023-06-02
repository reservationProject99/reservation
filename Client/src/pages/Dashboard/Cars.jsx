import { useState } from "react";
import "../../styles/Cars.css";
import carData from "../../assets/data/carData";
import CarItemAdmin from "../../components/Dashboard/UI/CarItemAdmin";

const Cars = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const filteredCars = carData.filter((car) => {
    if (selectedBrand && car.brand !== selectedBrand) {
      return false;
    }
    if (selectedStatus && car.Status !== selectedStatus) {
      return false;
    }
    return true;
  });

  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">All Cars</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select onChange={handleStatusChange} value={selectedStatus}>
              <option value="New">Status</option>
              <option value="Rented">Rented</option>
              <option value="Not Rented">Not Rented</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select onChange={handleBrandChange} value={selectedBrand}>
              <option value="">Select Brand</option>
              <option value="Audi">Audi</option>
              <option value="Toyota">Toyota</option>
              <option value="Bmw">Bmw</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: "3rem",
            justifyContent: "center",
          }}
        >
          {filteredCars.map((item) => (
            <CarItemAdmin item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
