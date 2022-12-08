import Loader from "../Components/Loader";
import RestaurantTable from "../Components/RestaurantTable"
import Pagination from "../Components/Pagination"
import {useState} from "react" ;

function Dashboard() {
  // const {load} = prop 
  // if(load){
  //   return   //    <Loader />
  //   ) 
  // }
  // const [currentPage , setCurrentPage] = useState(1)
  // const handlePageChange=()=>{
    
  // }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box">
          <option value="">All</option>
          <option value="fine_dining">fine_dining</option>
          <option value="ethnic">ethnic</option>
          <option value="fast_food">fast_food</option>
          <option value="cafe">cafe</option>
          <option value="casual_dining">casual_dining</option>
          
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
       
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
        <RestaurantTable />
      </div>
      <br />
      <div data-testid="pagination-container">
        {/* <Pagination /> */}
      </div>
    </div>
  );
}

export default Dashboard;
