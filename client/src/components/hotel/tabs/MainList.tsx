import * as React from "react";
import SearchWidget from "../common/SearchWidget";
import { HotelList } from "../common/HotelList";
import { dateWithoutDayTime } from "../../../utils/genericUtils";
import { checkDateVal } from "../../../utils/validationExpressions";
import MediaQuery from "react-responsive";
import { SvgElement, iconTypesEnum } from "../../common/elements/SvgElement";
import { serviceHelper } from "../../../utils/serviceHelper";
import CommonApis from "../../../apis/CommonApis";
import { SearchModel } from "../../../models/common/hotelModels";



const MainList: React.FunctionComponent = (): React.ReactElement<void> => {
    const [hotels, setHotels] = React.useState<any>([]);
    const [search, setSearch] = React.useState<SearchModel>({
        location: "",
        name: "",
        checkin: dateWithoutDayTime(),
        checkout: dateWithoutDayTime(),
    });
    const [dateError, setDateError] = React.useState<string>("");
    const [toggleSearch, setToggleSearch] = React.useState<boolean>(false);

    // API calls-------------------------------------------
    const getHotelList = () => {
        serviceHelper(CommonApis.getHotelList(),
            (data: any) => {
                setHotels(data)
            }, (error) => {
                alert("please try again, there is something wrong.")
            }, null, null
        );
    };

    const getSearchList = () => {
        serviceHelper(CommonApis.getSearch(search),
            (data: any) => {
                setHotels(data)
            }, (error) => {
                alert("please try again, there is something wrong.")
            }, null, null
        );
    };


    // Events----------------------------------------------
    const inputChange = (e, unique?) => {
        if (unique) {
            search[unique] = e
        } else {
            search[e.target.name] = e.target.value
        }
        setSearch({ ...search });
    };

    const onClickSearch = () => {
        if (checkDateVal(search.checkin, search.checkout)) {
            setDateError("Check-out date should be after check-in date")
        } else {
            setDateError("")
            //like call api
            getSearchList()
        }
        setSearch({ ...search })
    }


    // Life Cycle events-----------------------------------
    React.useEffect(() => {
        // call this api
        getHotelList()
    }, [])


    return (
        <>
            <MediaQuery query="(max-width: 768px)">
                <div className="fixed-search-btn" onClick={() => setToggleSearch(!toggleSearch)}>
                    <SvgElement className="search-icon" type={iconTypesEnum.SEARCH_ICON} />
                </div>
                {toggleSearch ?
                    <SearchWidget
                        inputChange={inputChange}
                        onClickSearch={onClickSearch}
                        search={search}
                        checkDateError={dateError}
                    />
                    : <HotelList
                        hotels={hotels}
                    />
                }
            </MediaQuery>
            <MediaQuery query="(min-width: 769px)">
                <SearchWidget
                    inputChange={inputChange}
                    onClickSearch={onClickSearch}
                    search={search}
                    checkDateError={dateError}
                />
                <HotelList
                    hotels={hotels}
                />
            </MediaQuery>
        </>
    );
};

export default MainList;
