import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { useState } from "react";

const Provider = () => {
  const defult = () => {
    return (
      <>
        <Helmet title="Cars">
          <div class="btn-group" role="group" aria-label="Basic example"></div>
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
      </>
    );
  };
  const [elementToDisplay, setElementToDisplay] = useState(defult);

  const myCars = () => {
    setElementToDisplay(
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

  const addCars = () => {
    setElementToDisplay(
      <div className=" m-5">
        <>
          <form className="d-flex flex-column">
            <div className="row">
              <div className="col">
                {/* Name input */}
                <div className="form-outline">
                  <input
                    type="text"
                    id="form8Example1"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form8Example1">
                    Car Name
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Email input */}
                <div className="form-outline">
                  <input
                    type="email"
                    id="form8Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form8Example2">
                    Car Type
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Email input */}
                <div className="form-outline">
                  <input
                    type="email"
                    id="form8Example"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form8Example">
                    Energy Type
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                {/* Name input */}
                <div className="form-outline">
                  <input
                    type="text"
                    id="form8Example3"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form8Example3">
                    Rental Price per Day
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Name input */}
                <div className="form-outline">
                  <input
                    type="text"
                    id="form8Example4"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form8Example4">
                    Seat's Num
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Email input */}
                <div className="form-outline">
                  <input
                    type="email"
                    id="form8Example5"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form8Example5">
                    Year of made
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroupFileAddon01"
                    >
                      Upload
                    </span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose Car image
                    </label>
                  </div>
                </div>
              </div>
            <div className="d-flex justify-content-end">
              <button className=" w-50 header__btn btn text-white">
                Add Car
              </button>
            </div>
            </div>
          </form>
        </>
      </div>
    );
  };

  const rentalCar = ()=>{
    setElementToDisplay(
              <Helmet title="Cars">
      <div className="d-flex flex-row">
        <div className="col">
          <div className="col-lg-4">
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
        <div className="col">
          <div className="col-lg-4">
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
    )
  }


  return (
    <>
    <div className="d-flex justify-content-center">
    <div
        class="btn-group d-flex justify-content-center my-3 w-25"
        role="group"
        aria-label="Basic example"
      >
        <button
          onClick={myCars}
          type="button"
          class="header__btn btn text-white"
        >
          My Cars
        </button>
        <button
          onClick={addCars}
          type="button"
          class="header__btn btn text-white"
        >
          Add Cars
        </button>
        <button onClick={rentalCar} type="button" class="header__btn btn text-white">
          Rental Car
        </button>
        </div>
    </div>

      {elementToDisplay}
    </>
  );
};

export default Provider;
