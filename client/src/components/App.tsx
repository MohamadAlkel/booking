import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { AppRoutes } from "../models/constants/routePaths";
import { Loader } from "./common/elements/Loader";

const packageJson = require("../../package.json");

const Hotel = React.lazy(() => import("./hotel/Hotel"));
const NotFound = React.lazy(() => import("./common/NotFound"));

const App: React.FunctionComponent = (): React.ReactElement<void> => {
    return (
        <>
            <div className="hidden">VERSION: {packageJson?.version}</div>
            <React.Suspense fallback={<Loader />}>
                <Switch>
                    <Route path={AppRoutes.Base} component={Hotel} />
                    <Route path={AppRoutes.Rest} component={NotFound} />
                </Switch>
            </React.Suspense>
        </>
    );
};

export default App;
