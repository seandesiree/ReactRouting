
import { NavLink } from "react-router-dom";

function NavigationBar () {
    return (
        <nav className="clearfix">
            <NavLink to='/characters' activeClassName='active'>Marvel Characters</NavLink>
            <NavLink to='/characterdetails' activeClassName='active'>Character Details</NavLink>
            <NavLink to='/comic' activeClassName='active'>Comic </NavLink>
        </nav>
    )
}

export default NavigationBar
