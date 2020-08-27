import axios from "axios";
import configs from "../configs";
import { getJson, jsonTypes } from "./mocks/mockService";
import { checkServerIdentity } from "tls";
import { getDetails } from "../utils/testApi/getDetails"

const getHotelListCall = async () => {
    if (configs.type === "LOCAL") {
        return getJson(jsonTypes.GET_HOTEL_LIST);
    } else {
        const requestURL = configs.pinDomain + "/hotels";
        return axios.get(requestURL);
    }
};


const getHotelCall = async (hotelId: string) => {
    if (configs.type === "LOCAL") {
        return getJson(jsonTypes.GET_HOTEL, hotelId);
    } else {
        const requestURL = configs.pinDomain + `/hotels/${hotelId}`;
        return axios.get(requestURL);
    }
};

const getSearchCall = async (search: any) => {
    if (configs.type === "LOCAL") {
        return getJson(jsonTypes.GET_SEARCH);
    } else {
        const requestURL = configs.pinDomain + `/hotels/search`;
        return axios({
            method: "get",
            url: requestURL,
            data: {
                search
            }
        });
    }
};

const getRefNumbCall = async (refNum: string) => {
    if (configs.type === "LOCAL") {
        return getJson(jsonTypes.GET_REF_NUMBER, refNum);
    } else {
        const requestURL = configs.pinDomain + `/hotels/${refNum}`;
        return axios.get(requestURL);
    }
};

const bookCall = async (name: string, email: string, checkin: Date, checkout: Date) => {
    if (configs.type === "LOCAL") {
        return getJson(jsonTypes.POST_BOOK);
    } else {
        const requestURL = configs.domain + "/book";
        return axios({
            method: "post",
            url: requestURL,
            data: {
                name: name,
                email: email,
                checkin: checkin,
                checkout: checkout
            }
        });
    }

};

class CommonApis {
    static getHotelList(): Promise<any> {
        return getHotelListCall();
    }

    static getHotel(hotelId: string): Promise<any> {
        return getHotelCall(hotelId);
    }

    static getSearch(search: any): Promise<any> {
        return getSearchCall(search);
    }

    static getRefNumb(refNum): Promise<any> {
        return getRefNumbCall(refNum);
    }

    static book(name: string, email: string, checkin: Date, checkout: Date): Promise<any> {
        return bookCall(name, email, checkin, checkout);
    }
}

export default CommonApis;
