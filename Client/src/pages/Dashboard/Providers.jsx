import { useEffect, useState } from "react";
import "../../styles/Button.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from 'react-toastify';


const Providers = () => {
  const [selectedOption, setSelectedOption] = useState("serviceProviders");
  const [providerData, setproviderData] = useState();
  const [providerrequestData, setproviderrequestData] = useState();


  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/provider", {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;
      setproviderData(data);

    } catch (error) {
      console.error(error);
    }

    try {
      const response = await axios.get("http://localhost:5000/not_active_provider", {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;
      setproviderrequestData(data);

    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/delete_provider/${id}`, {}, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      fetchData()
      toast.success(`Provider with id: ${id} deleted!`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/delete_provider/${id}`, {}, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      fetchData()
      toast.success(`Provider with id: ${id} Not accepted!`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/accept_provider/${id}`, {}, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      fetchData()
      toast.success(`Provider with id: ${id} Accepted!`);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    fetchData()
  }, [])

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
              <th>Phone Number</th>
              <th>Address</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {providerData?.map(provider => (
              <tr>
                <td>
                  <div className="d-flex align-items-center">{provider.provider_id}</div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{provider.username}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{provider.email}</p>
                </td>

                <td>{provider.phone}</td>
                <td>{provider.address}</td>
                <td>
                  <button onClick={() => handleDelete(provider.provider_id)} className="btn rounded-lg px-4 py-2 btn-outline-danger">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
              </tr>

            ))}

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
            {providerrequestData?.map(provider => (
              <tr>
                <td>
                  <div className="d-flex align-items-center">{provider.provider_id}</div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{provider.username}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{provider.email}</p>
                </td>

                <td>{provider.phone}</td>
                <td>{provider.address}</td>
                <td>
                  <button onClick={() => handleReject(provider.provider_id)} className="btn rounded-lg px-4 py-2 btn-outline-danger m-1">
                    <i className="ri-close-line"></i>
                  </button>
                  <button onClick={() => handleAccept(provider.provider_id)} className="btn rounded-lg px-4 py-2 btn-outline-success m-1">
                    <i className="ri-check-line"></i>
                  </button>
                </td>
              </tr>

            ))}

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
      < ToastContainer />
    </div>
  );
};

export default Providers;
