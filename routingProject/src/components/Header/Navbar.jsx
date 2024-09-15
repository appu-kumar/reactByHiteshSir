import { NavLink } from 'react-router-dom';
import About from './About.jsx';
import ContactUs from './ContactUs.jsx';
import Home from './Home.jsx'
import Login from './Login.jsx'
function Navbar() {

    return (
        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "skyblue" }}>

            <NavLink to="/about"
                style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "inherit",
                    };
                }}
            >About </NavLink>
            <NavLink to=""
                style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "inherit",
                    };
                }}
            >Home </NavLink>
            <NavLink to="/contactus"
                style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "inherit",
                    };
                }}
            > Contact Us </NavLink>

            <NavLink to="/login"
                style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "inherit",
                    };
                }}
            > Login </NavLink>

        </div>
    )
}
export default Navbar;