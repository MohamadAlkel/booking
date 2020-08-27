import * as React from "react";
import { TextBox } from "../../common/elements/TextBox";
import { Datepicker } from "../../common/elements/Datepicker";
import { Button } from "../../common/elements/Button";
import { dateWithoutDayTime } from "../../../utils/genericUtils";
import { checkDateVal } from "../../../utils/validationExpressions";
import { serviceHelper } from "../../../utils/serviceHelper";
import CommonApis from "../../../apis/CommonApis";
import { UserDetailsModel } from "../../../models/common/hotelModels";


const Details: React.FunctionComponent = (): React.ReactElement<void> => {
    const [hotelDetail, setHotelDetail] = React.useState<any>({
        name: "",
        location: ""
    });
    const id = Number(window.location.href.split("/").reverse()[0]).toString()
    const [userDetail, setUserDetail] = React.useState<UserDetailsModel>({
        firstName: "",
        lastName: "",
        email: "",
        checkin: dateWithoutDayTime(),
        checkout: dateWithoutDayTime(),
        checkDateError: ""
    });


    // API calls-------------------------------------------
    const getHotel = () => {
        serviceHelper(CommonApis.getHotel(id),
            (data: any) => {
                console.log(data)
                setHotelDetail(data)
            }, (error) => {
                alert("please try again, there is something wrong.")
            }, null, null
        );
    }

    // Events----------------------------------------------
    const inputChange = (e, unique?) => {
        if (unique) {
            userDetail[unique] = e
        } else {
            userDetail[e.target.name] = e.target.value
        }
        setUserDetail({ ...userDetail });
    };

    const onClickBook = () => {
        if (checkDateVal(userDetail.checkin, userDetail.checkout)) {
            userDetail.checkDateError = "Check-out date should be after check-in date"
        } else {
            userDetail.checkDateError = ""
            console.log(userDetail)
        }
        setUserDetail({ ...userDetail })
    }

    // Life Cycle events-----------------------------------
    React.useEffect(() => {
        getHotel()
    }, [])


    return (
        <div className="details">
            <h2>{hotelDetail.name}</h2>
            <h4>{hotelDetail.location}</h4>
            <TextBox
                name="firstName"
                onChange={inputChange}
                value={userDetail.firstName}
                label="Firs tName"
            />
            <TextBox
                name="lastName"
                onChange={inputChange}
                value={userDetail.lastName}
                label="Last Name"
            />
            <TextBox
                name="email"
                onChange={inputChange}
                value={userDetail.email}
                label="Email"
            />
            <Datepicker
                label="Check-in date"
                name="checkin"
                onChange={(e) => inputChange(e, "checkin")}
                value={userDetail.checkin}
            />
            <Datepicker
                label="Check-out date"
                name="checkout"
                onChange={(e) => inputChange(e, "checkout")}
                value={userDetail.checkout}
                error={userDetail.checkDateError}
            />
            <Button
                className="book-btn"
                label="Book it"
                onClick={onClickBook}
            />
        </div>
    );
};

export default Details;