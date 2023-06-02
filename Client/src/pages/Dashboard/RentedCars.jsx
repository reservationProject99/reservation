
import carData from "../../assets/data/carData";
import CarItemAdmin from "../../components/Dashboard/UI/CarItemAdmin";


const RentedCars = () => {
  
  const filteredCars = carData.filter((car) => {
    if ( car.Status === "Not Rented") {
      return false;
    }
    
    return true;
  });

  return (
    <>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center',margin:'1rem', columnGap:'2rem', rowGap:'2rem', paddingTop:'2rem', marginTop:'5rem'}}>
          {filteredCars.map((item) => (
            <CarItemAdmin item={item} key={item.id} />
          ))}
        </div>
    </>
  );
};

export default RentedCars;
