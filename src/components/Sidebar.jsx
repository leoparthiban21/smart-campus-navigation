import { Link } from "react-router-dom";

function Sidebar(){

return(

<div className="sidebar">

<h3>Campus</h3>

<ul>

<li><Link to="/dashboard">Dashboard</Link></li>

<li><Link to="/map">Map</Link></li>

<li><Link to="/buildings">Buildings</Link></li>

<li><Link to="/navigation">Navigation</Link></li>

</ul>

</div>

);

}

export default Sidebar;