import configs from "../../configs";
import { getDetails } from "../../utils/testApi/getDetails";

// Here are enums of availble jsons
export const enum jsonTypes {
    GET_HOTEL_LIST,
    GET_HOTEL,
    GET_SEARCH,
    GET_REF_NUMBER,
    POST_BOOK
}

/**
 * This method will return the json data based on their types above
 * @param {jsonTypes} type The type of the JSON file to retrieve
 * @returns {Promise<any>} Promise
 */
export function getJson(type: jsonTypes, hotelId?: string): Promise<any> {
    let data: any;
    switch (type) {
        case jsonTypes.GET_HOTEL_LIST:
            if (process.env.NODE_ENV !== "production") { data = require("./jsons/getHotelList.json"); }
            return new Promise((resolve, reject) => { simulateData(resolve, data, 200, configs.delay); });

        case jsonTypes.GET_HOTEL:
            if (process.env.NODE_ENV !== "production") {
                const HotelListApi = require("../../apis/mocks/jsons/getHotel");
                data = getDetails(Number(hotelId), HotelListApi)
            }
            return new Promise((resolve, reject) => { simulateData(resolve, data, 200, configs.delay); });

        case jsonTypes.GET_SEARCH:
            if (process.env.NODE_ENV !== "production") { data = require("./jsons/getSearch.json"); }
            return new Promise((resolve, reject) => { simulateData(resolve, data, 200, configs.delay); });

        case jsonTypes.GET_REF_NUMBER:
            if (process.env.NODE_ENV !== "production") {
                const HotelListApi = require("../../apis/mocks/jsons/getRefNum");
                data = getDetails(Number(hotelId), HotelListApi)
            }
            return new Promise((resolve, reject) => { simulateData(resolve, data, 200, configs.delay); });

        case jsonTypes.POST_BOOK:
            if (process.env.NODE_ENV !== "production") { data = "{}"; }
            return new Promise((resolve, reject) => { simulateData(resolve, data, 200, configs.delay); });

        default: return new Promise((resolve, reject) => reject("JSON data should not be retireved in production mode"));
    }
}

function simulateData(resolve: any, data: any, status: number, timeout: number): any {
    return setTimeout(() => { resolve({ status: status, data: data }); }, timeout);
}
