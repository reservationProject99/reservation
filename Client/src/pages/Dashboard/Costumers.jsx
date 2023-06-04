import axios from "axios";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from 'react-toastify';

function Customers() {
  const [selectedOption, setSelectedOption] = useState("Customers");
  const [usersData, setusersData] = useState();

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/delete_user/${id}`, {}, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      fetchData()
      toast.success(`User with id: ${id} deleted!`);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;
      setusersData(data);

    } catch (error) {
      console.error(error);
    }
  }
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
            {usersData?.map(user => (
              <tr>
                <td>
                  <div className="d-flex align-items-center">{user.customers_id}</div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{user.username}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{user.email}</p>
                </td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <button onClick={() => handleDelete(user.customers_id)} className="btn rounded-lg px-4 py-2 btn-outline-danger">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
              </tr>

            ))}

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
      < ToastContainer />
    </div>
  );
}

export default Customers;
