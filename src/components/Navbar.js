import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.component {
    render() {
        return (
            <div>
                <NavLink exact to="/"> Home </NavLink>
                <NavLink to="/search"> Search </NavLink>
                <NavLink to="/contributors"> Contributors </NavLink>

                

            </div>
        )
    }
}

export default Navbar;