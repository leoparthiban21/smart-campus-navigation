import { Link } from "react-router-dom";

function Dashboard(){

return(

<div>

<h1>Smart Campus Navigation</h1>

<Link to="/map">View Campus Map</Link>

<br/>

<Link to="/buildings">Building List</Link>

<br/>

<Link to="/navigation">Navigation</Link>

</div>

);

}

export default Dashboard;