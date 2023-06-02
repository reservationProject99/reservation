import "../../styles/dashboard.css";
import SingleCard from "../../components/Dashboard/reuseable/SingleCard";

import CarStatsChart from "../../charts/CarStatsChart";

import UsersChart from "../../charts/UsersChart";

const clientObj1 = {
  title: "Costumers",
  totalNumber: 1697,
  icon: "ri-user-line",
};

const clientObj2 = {
  title: "Service Provider",
  totalNumber: 50,
  icon: "ri-user-line",
};
const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-car-line",
};

const RentedObj = {
  title: "Cars Rented",
  totalNumber: 167,
  icon: "ri-car-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={clientObj1} />
          <SingleCard item={clientObj2} />
          <SingleCard item={carObj} />
          <SingleCard item={RentedObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Users Statistics</h3>
            <UsersChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
