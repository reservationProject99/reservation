

function Costumers() {
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
              <p className="fw-normal mb-1"></p>email@gmail.com
            </td>
          
            <td>0777777777</td>
            <td>Amman,Jordan</td>
            <td>
              <button type="button" className="btn btn-link btn-sm btn-rounded">
                <i className="ri-delete-bin-line"></i>
              </button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default Costumers;
