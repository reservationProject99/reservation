import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const FindCarForm = () => {
  return (
    <>
      <div className="text-center pt-5">
        <h4>Find Your Car Here</h4>
      </div>
      <Form className="form">
        <div className=" d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="select__group">
            <select>
              <option value="SB">Select Brand</option>
              <option value="Tesla">Tesla</option>
              <option value="TOYOTA">TOYOTA</option>
              <option value="Bmw">Bmw</option>
              <option value="Ford">Ford</option>
              <option value="Nissan">Nissan</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Kia">Kia</option>
            </select>
          </FormGroup>

          <FormGroup className="select__group">
            <select>
              <option value="ST">Select Type</option>
              <option value="Van">Van</option>
              <option value="Sports">Sports</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Truck">Truck</option>
              <option value="Family Car">Family Car</option>
            </select>
          </FormGroup>

          <FormGroup className="select__group">
            <select>
              <option value="SET">Select Energy Type</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
              <option value="Gas">Gas</option>
            </select>
          </FormGroup>

          <FormGroup className="select__group">
            <select>
              <option value="SP">Select Price</option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </FormGroup>
        </div>
        <div className="d-flex justify-content-center">
          <FormGroup className="form__group">
            <Link to="/cars">
              <button className="btn find__car-btn">Find Car</button>
            </Link>
          </FormGroup>
        </div>
      </Form>
    </>
  );
};

export default FindCarForm;
