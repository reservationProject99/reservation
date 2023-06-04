import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from 'react-toastify';


function Admins() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [adminData, setadminData] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [password, setpassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/admin", {

      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address

    }, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then((response) => {

        fetchData()
        toast.success(`${email} is added as a new admin!`);
        handleClose

      });
  }


  const fetchData = async () => {

    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:5000/admin", {
        headers: {
          'authorization': `Bearer ${token}`
        }
      });
      const data = response.data;
      setadminData(data);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="py-5">
      <button
        className="btn rounded-lg px-4 py-2 btn-outline-success m-3 mt-5"
        onClick={handleShow}
      >
        <i className="ri-add-line">Add Admin</i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Data Of New Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="email" placeholder="Admin@2" autoFocus onChange={(event) => setname(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus onChange={(event) => setemail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" autoFocus onChange={(event) => setpassword(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="0799999999" autoFocus onChange={(event) => setphone(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zarqa , Jordan"
                autoFocus onChange={(event) => setaddress(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
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
          </tr>
        </thead>
        <tbody>
          {adminData?.map(admin => (
            <tr>
              <td>
                <div className="d-flex align-items-center">{admin.admin_id}</div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{admin.username}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{admin.email}</p>
              </td>

              <td>{admin.phone}</td>
              <td>{admin.address}</td>
            </tr>

          ))}
        </tbody>
      </table>
      < ToastContainer />
    </div>
  );
}

export default Admins;
