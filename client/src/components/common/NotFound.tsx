import * as React from "react";


const NotFound: React.FunctionComponent = React.memo((): React.ReactElement<void> => {
    return (
        <div className="notfound-container">
            <div className="content">
                <div className="header">404</div>
                <div className="desc">Page not found!</div>
            </div>
        </div>
    );
});

export default NotFound;
