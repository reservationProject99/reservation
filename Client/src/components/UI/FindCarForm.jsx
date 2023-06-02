import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <>
      <div className="text-center pt-5">
        <h4>Find Your Car Here</h4>
      </div>
      <Form className="form">
        <div className=" d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="form__group">
            <input type="text" placeholder="From " required />
          </FormGroup>

          <FormGroup className="form__group">
            <input type="text" placeholder="To " required />
          </FormGroup>

          <FormGroup className="form__group">
            <input type="date" placeholder="Journey date" required />
          </FormGroup>

          <FormGroup className="form__group">
            <input
              className="journey__time"
              type="time"
              placeholder="Journey time"
              required
            />
          </FormGroup>
          <FormGroup className="select__group">
            <select>
              <option value="ac">AC Car</option>
              <option value="non-ac">Non AC Car</option>
            </select>
          </FormGroup>

          <FormGroup className="form__group">
            <button className="btn find__car-btn">Find Car</button>
          </FormGroup>
        </div>
      </Form>
    </>
  );
};

export default FindCarForm;
