import Avtar from "./avataaars.png"
import {NavLink} from "react-router-dom"
const Navbar = () =>{
    return (
        <div className=" border-right border-light nav flex-column text-center myNav">
            <img src={Avtar} alt="profile" className="profileNav p-2" />
            <NavLink to="/" className="active my-3 link"> Home </NavLink>
            <NavLink to="/skills" className="active my-3  link"> Skills </NavLink>
            <NavLink to="/contact" className="active my-3  link"> Contact </NavLink>
        </div>  
    )
}
export default Navbar