import * as React from "react";
import { TextBox } from "../../common/elements/TextBox";
import { Datepicker } from "../../common/elements/Datepicker";
import { Button } from "../../common/elements/Button";
import {SearchModel} from "../../../models/common/hotelModels"


interface SearchWidgetProps {
    inputChange?: (event: React.ChangeEvent<HTMLInputElement>, string?) => void;
    onClickSearch?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    search?: SearchModel;
    checkDateError?: string;
}

const SearchWidget: React.FunctionComponent<SearchWidgetProps> = React.memo((props: SearchWidgetProps): React.ReactElement<void> => {

    return (
        <div className="wrap-search-widget">
            <div className="search-widget">
                <TextBox
                    name="location"
                    onChange={props.inputChange}
                    value={props.search.location}
                    label="city"
                />
                <TextBox
                    name="name"
                    onChange={props.inputChange}
                    value={props.search.name}
                    label="hotel name"
                />
                <Datepicker
                    label="Check-in date"
                    name="checkin"
                    onChange={(e) => props.inputChange(e, "checkin")}
                    value={props.search.checkin}
                />
                <Datepicker
                    label="Check-out date"
                    name="checkout"
                    onChange={(e) => props.inputChange(e, "checkout")}
                    value={props.search.checkout}
                    error={props.checkDateError}
                />
                <Button
                    className="search-btn"
                    label="Search"
                    onClick={props.onClickSearch}
                />
            </div>
        </div>
    );
});

export default SearchWidget;
