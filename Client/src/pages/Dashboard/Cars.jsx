// /* eslint-disable react/jsx-key */
// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import "../../styles/Cars.css";
// import axios from "axios";

// const Cars = () => {
//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("");
//   const [carData, setCarsData] = useState();

//   const handleBrandChange = (event) => {
//     setSelectedBrand(event.target.value);
//   };
//   const handleStatusChange = (event) => {
//     setSelectedStatus(event.target.value);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/delete_car/${id}`,
//         {},
//         {
//           headers: {
//             authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       fetchData();
//       toast.success(`car with id: ${id} deleted!`);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/cars", {
//         headers: {
//           'authorization': `Bearer ${localStorage.getItem("token")}`
//         }
//       });
//       const data = response.data;
//       console.log(data);
//       setCarsData(data);

//     } catch (error) {
//       console.error(error);
//     }
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div className="bookings">
//       <div className="booking__wrapper">
//         <h2 className="booking__title">All Cars</h2>

//         <div className="filter__widget-wrapper">
//           <div className="filter__widget-01">
//             <select onChange={handleStatusChange} value={selectedStatus}>
//               <option value="New">Status</option>
//               <option value="Rented">Rented</option>
//               <option value="Not Rented">Not Rented</option>
//             </select>
//           </div>

//           <div className="filter__widget-01">
//             <select onChange={handleBrandChange} value={selectedBrand}>
//               <option value="">Select Brand</option>
//               <option value="Audi">Audi</option>
//               <option value="Toyota">Toyota</option>
//               <option value="Bmw">Bmw</option>
//             </select>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             columnGap: "3rem",
//             justifyContent: "center",
//           }}
//         >

//           {carData?.map((car) => (
//             <div className="car__item">
//               <div className="car__item-top">
//                 <div className="car__item-tile">
//                   <h3>{car.model}</h3>
//                   <span>
//                     <i onClick={()=>handleDelete(car.cars_id)} className="ri-delete-bin-line"></i>

//                   </span>
//                 </div>
//                 <p>{car.type}</p>
//               </div>

//               <div className="car__img">
//                 <img src={car.images_data} alt="" />
//               </div>

//               <div className="car__item-bottom">
//                 <div className="car__bottom-left">

//                   <p>
//                     {car.available}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cars;

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "../../styles/Cars.css";
import axios from "axios";
import { toast } from "react-toastify";

const Cars = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [carData, setCarsData] = useState();

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/delete_car/${id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchData();
      toast.success(`car with id: ${id} deleted!`);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cars", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = response.data;
      console.log(data);
      setCarsData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {carData?.map((car) => (
            <div className="mb-5">
              <div
                className="car__item"
                style={{
                  backgroundColor: "white",
                  width: "18rem",
                  margin: "0",
                  marginLeft: "2rem",
                  marginRight: "2rem",
                  padding: "0",
                }}
              >
                <div className="car__item-top">
                  <span>
                    <i
                      onClick={() => handleDelete(car.cars_id)}
                      className="ri-delete-bin-line text-danger"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </span>
                </div>
                <div className="car__img">
                  <img src={`${car.images_data}`} alt="" className="w-100" />
                </div>

                <div className="car__item-content mt-4 ">
                  <h4 className="section__title text-center">{car.model}</h4>
                  <h6 className="rent__price text-center mx-5">
                    ${car.rental_price}.00 <span>/ Day</span>
                  </h6>

                  <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4 mx-3">
                    <span className="d-flex align-items-center gap-1">
                      <i className="ri-car-line"></i> {car.type}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <i className="ri-settings-2-line"></i> {car.energy_type}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <i
                        className="ri-calendar-line"
                        style={{ color: "#f9a826" }}
                      ></i>
                      {car.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
