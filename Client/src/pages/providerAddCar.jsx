/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

function ProviderAddCar() {
  const [type, setType] = useState();
  const [energy_type, setEnergyEtype] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();
  const [rentalPrice, setRentalPrice] = useState();
  const [imagesData, setImagesData] = useState();
  const [seatsNumber, setSeatsNumber] = useState();
  const [cardescription, setCardescription] = useState();


  const handleAddCar = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/cars", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        discrabtion: cardescription,
        type: type,
        energy_type: energy_type,
        model: model,
        year: year,
        rental_price: rentalPrice,
        images_data: imagesData,
        seats_number: seatsNumber,
        provider_id: 1,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function handleCarType(event) {
    const carType = event.target.value;
    setType(carType);
  }
  function handleEnergyType(event) {
    const energyType = event.target.value;
    setEnergyEtype(energyType);
  }
  function handleModel(event) {
    const model = event.target.value;
    setModel(model);
  }
  function handleYear(event) {
    const year = event.target.value;
    setYear(year);
  }
  function handleRentalPrice(event) {
    const rentalPrice = event.target.value;
    setRentalPrice(rentalPrice);
  }
  function handleImgUrl(event) {
    const imgUrl = event.target.value;
    setImagesData(imgUrl);
  }
  function handleSeatNumber(event) {
    const seatsNum = event.target.value;
    setSeatsNumber(seatsNum);
  }
  function handleCardescription(event) {
    const cardescription = event.target.value;
    setCardescription(cardescription);
  }

  return (
    <>
      <div className=" m-5">
        <>
          <form className="d-flex flex-column" onSubmit={handleAddCar}>
            <div className="row">
              <div className="col">
                <div className="form-outline">
                  <input
                    placeholder="Car Name"
                    type="text"
                    id="form8Example1"
                    className="form-control"
                    required
                    onChange={handleModel}
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    type="text"
                    required
                    onChange={handleCarType}
                  >
                    <option selected>Car Type...</option>
                    <option value="Luxury Car">Luxury Car</option>
                    <option value="Vintage Car">Vintage Car</option>
                    <option value="Family Car">Family Car</option>
                    <option value="Off-Road Car">Off-Road Car</option>
                    <option value="Van">Van</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    type="text"
                    required
                    onChange={handleEnergyType}
                  >
                    <option selected>Energy Type...</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                  </select>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                {/* Name input */}
                <div className="form-outline">
                  <input
                    placeholder=" Rental Price per Day"
                    type="number"
                    id="form8Example3"
                    className="form-control"
                    required
                    onChange={handleRentalPrice}
                  />
                </div>
              </div>
              <div className="col">
                {/* Name input */}
                <div className="form-outline">
                  <input
                    placeholder=" Seat's Number"
                    type="number"
                    id="form8Example4"
                    className="form-control"
                    min="1"
                    max="10"
                    step="1"
                    required
                    onChange={handleSeatNumber}
                  />
                  {/* <label className="form-label" htmlFor="form8Example4">
                    Seat's Num
                  </label> */}
                </div>
              </div>
              <div className="col">
                {/* Email input */}
                <div className="form-outline">
                  <input
                    placeholder=" Year of made"
                    type="number"
                    id="form8Example5"
                    className="form-control"
                    min="1900"
                    max="2099"
                    step="1"
                    required
                    onChange={handleYear}
                  />
                </div>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col">
                <div className="form-outline">
                  <input
                    placeholder="Image Url"
                    type="text"
                    id="form8Example3"
                    className="form-control"
                    required
                    onChange={handleImgUrl}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    placeholder="Car description"
                    type="text"
                    id="form8Example3"
                    className="form-control"
                    required
                    onChange={handleCardescription}
                  />
                </div>
              </div>
              <br />
              <br />

              <div className="d-flex justify-content-center">
                <button
                  className=" w-50 header__btn btn text-white "
                  type="submit"
                >
                  Add Car
                </button>
              </div>
            </div>
          </form>
        </>
      </div>
    </>
  );
}

export default ProviderAddCar;
