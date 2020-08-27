import * as React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";


const Titlebar: React.FunctionComponent = React.memo((): React.ReactElement<void> => {
    return (
        <header className="title-bar">
            <Link className="logo" to="/hotel-list" >
                OurHotel
            </Link>
            <Menu />
        </header>
    );
});

export default Titlebar;
