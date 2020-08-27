import * as React from "react";
import { MenuList } from "../../../models/constants/menuList";
import { SvgTitle } from "../elements/SvgTitle";
import { NavLink } from "react-router-dom";


const Menu: React.FunctionComponent = React.memo((): React.ReactElement<void> => {

    return (
        <div className="menu">
            {MenuList.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <NavLink className="nav-text" activeClassName="active-nav" to={item.link} >
                            <SvgTitle className="nav-icon" type={index} />
                            {item.name}
                        </NavLink>
                    </React.Fragment>
                )
            })}
        </div>
    );
});

export default Menu;
