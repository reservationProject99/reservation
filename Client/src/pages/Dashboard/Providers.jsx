import  { useState } from "react";
import "../../styles/Button.css";

const Providers = () => {
  const [selectedOption, setSelectedOption] = useState("serviceProviders");

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
            value="serviceProviders"
            checked={selectedOption === "serviceProviders"}
            onChange={handleRadioChange}
          />
          <span className="name">Service Providers</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="joiningRequests"
            checked={selectedOption === "joiningRequests"}
            onChange={handleRadioChange}
          />
          <span className="name">Joining Requests</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="ProviderHistory"
            checked={selectedOption === "ProviderHistory"}
            onChange={handleRadioChange}
          />
          <span className="name">Providers History</span>
        </label>
      </div>

      {selectedOption === "serviceProviders" ? (
        <table
          className="table align-middle mb-0 bg-white"
          style={{ marginTop: "2rem" }}
        >
          <thead className="bg-light">
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Cars</th>
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

              <td>
                <ol>
                  <li>Toyota</li>
                  <li>Toyota</li>
                </ol>
              </td>
              <td>0777777777</td>
              <td>Jordan , Zarqa</td>
              <td>
                <button className="btn rounded-lg px-4 py-2 btn-outline-danger">
                  <i className="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : selectedOption === "joiningRequests" ? (
        <table
          className="table align-middle mb-0 bg-white"
          style={{ marginTop: "2rem" }}
        >
          <thead className="bg-light">
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Request Status</th>
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
              <td>Jordan , Zarqa</td>
              <td>
                <button className="btn rounded-lg px-4 py-2 btn-outline-danger m-1">
                  <i className="ri-close-line"></i>
                </button>
                <button className="btn rounded-lg px-4 py-2 btn-outline-success m-1">
                  <i className="ri-check-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : selectedOption === "ProviderHistory" ? (
        <table
          className="table align-middle mb-0 bg-white"
          style={{ marginTop: "2rem" }}
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
              <td>Jordan , Zarqa</td>
            </tr>
            <hr />
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Providers;
