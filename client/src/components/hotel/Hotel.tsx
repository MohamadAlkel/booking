import * as React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { AppRoutes, HotelsRoutes } from "../../models/constants/routePaths";
import { Loader } from "../common/elements/Loader";
import Titlebar from "../common/titlebar/Titlebar";


const MainList = React.lazy(() => import("./tabs/MainList"));
const MyBooking = React.lazy(() => import("./tabs/MyBooking"));
const Details = React.lazy(() => import("./tabs/Details"));
const NotFound = React.lazy(() => import("../common/NotFound"));


const Banking: React.FunctionComponent = (): React.ReactElement<void> => {
    const hiddenElement = React.useRef(null);
    const location = useLocation();

    // scroll to top whenever route changes
    React.useEffect(() => {
        hiddenElement.current.scrollIntoView();
    }, [location.pathname]);

    return (
        <>
            <Titlebar />
            <div className="home">
                <div ref={hiddenElement} />
                <div className="container">
                    <React.Suspense fallback={<Loader />}>
                        <Switch>
                            <Route path={AppRoutes.Base} exact={true} ><Redirect to={HotelsRoutes.MainList.toString()} /></Route>
                            <Route path={HotelsRoutes.MainList.toString()} component={MainList} />
                            <Route path={HotelsRoutes.MyBooking.toString()} component={MyBooking} />
                            <Route path={HotelsRoutes.Details.toString()} component={Details} />
                            <Route path={AppRoutes.Rest} component={NotFound} />
                        </Switch>
                    </React.Suspense>
                </div>
            </div>
        </>
    );
};

export default Banking;
