/* eslint-disable react/prop-types */

const Providers = ({Request, Accept, Reject}) => {

  return (
    <div>
      <table
        className="table align-middle mb-0 bg-white"
        style={{ marginTop: "5rem" }}
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
              <button  className="btn btn-link btn-sm btn-rounded">
                <i className="ri-delete-bin-line"></i>
              </button>
            </td>
          </tr>
          <hr></hr>
         
        </tbody>
      </table>
        {/* --------------------- REQUESTS ----------------- */}

      <div className="card" style={{ width: "18rem", margin:'2rem' }}>
  <img className="card-img-top" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Type:</h5>
    <h6 className="card-text">Model:</h6>
    <h6 className="card-text">Energy Type:</h6>
    <h6 className="card-text">Year:</h6>
    <h6 className="card-text">Price:</h6>
    <h6 className="card-text">Provider:</h6>
    <button className="btn btn-link "
 onClick={() => Reject(Request.id)}
 >Reject</button>
 <button className="btn btn-link "
 onClick={() => Accept(Request.id)}
 >Accept</button>
  </div>
</div>


      </div>
  );
};

export default Providers;
