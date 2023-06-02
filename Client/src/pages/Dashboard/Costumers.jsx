import { useState } from "react";

function Customers() {
  const [selectedOption, setSelectedOption] = useState("Customers");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div
        className="radio-inputs"
        style={{ marginTop: "5rem", width: "fit-content", columnGap: "2rem" }}
      >
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="Customers"
            checked={selectedOption === "Customers"}
            onChange={handleRadioChange}
          />
          <span className="name">Customers</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="CustomersHistory"
            checked={selectedOption === "CustomersHistory"}
            onChange={handleRadioChange}
          />
          <span className="name">Customers History</span>
        </label>
      </div>
      {selectedOption === "Customers" ? (
        <table
          className="table align-middle mb-0 bg-white"
          style={{ marginTop: "5rem" }}
        >
          <thead className="bg-light">
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">1</div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">email@gmail.com</p>
              </td>
              <td>0777777777</td>
              <td>Amman, Jordan</td>
              <td>
                <button className="btn rounded-lg px-4 py-2 btn-outline-danger">
                  <i className="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table
          className="table align-middle mb-0 bg-white"
          style={{ marginTop: "5rem" }}
        >
          <thead className="bg-light">
            <tr>
              <th>ID</th>
              <th>Move Type</th>
              <th>Car ID</th>
              <th>Action Date</th>
              <th>Movement ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">1</div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">email@gmail.com</p>
              </td>
              <td>0777777777</td>
              <td>Amman, Jordan</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Customers;
