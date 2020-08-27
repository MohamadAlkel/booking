import * as React from "react";
import { TextBox } from "../../common/elements/TextBox";
import { Button } from "../../common/elements/Button"
import { serviceHelper } from "../../../utils/serviceHelper";
import CommonApis from "../../../apis/CommonApis";


const MyBooking: React.FunctionComponent = (): React.ReactElement<void> => {
    const [refNum, setRefNum] = React.useState<string>("");
    const [hotel, setHotel] = React.useState<any>({
        name: "",
        location: "",
        checkin: "",
        checkout: ""
    });

    // API calls-------------------------------------------
    const onClickBook = () => {
        serviceHelper(CommonApis.getRefNumb(refNum),
            (data: any) => {
                console.log(data)
                hotel.name = data.name
                hotel.location = data.location
                hotel.checkin = data.booked.checkin
                hotel.checkout = data.booked.checkout
                setHotel({ ...hotel })
            }, (error) => {
                alert("please try again, there is something wrong.")
            }, null, null
        );
    };


    return (
        <>
            <div className="my-booking">
                <h2>booking details</h2>
                <TextBox
                    name="refNum"
                    onChange={(e) => setRefNum(e.target.value)}
                    value={refNum}
                    label="reference number"
                />
                <Button
                    label="Get it"
                    className="book"
                    onClick={onClickBook}
                />
            </div>
            {hotel.name ?
                <div className="booking-info">
                    <h3>Hotel name: {hotel.name}</h3>
                    <h3>city: {hotel.location}</h3>
                    <h3>checkin: {hotel.checkin}</h3>
                    <h3>checkout: {hotel.checkout}</h3>
                </div>
                : ""
            }
        </>
    );
};

export default MyBooking;
