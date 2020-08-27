import * as React from "react";
import { Cards } from "../../common/Cards";


export interface HotelListProps {
    hotels?: any;
    onClickSelect?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HotelList: React.FunctionComponent<HotelListProps> = (props: HotelListProps): React.ReactElement<void> => {

    return (
        <div className="wrap-hotel-list">
            <div >

                {props.hotels.map((hotel, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Cards
                                id={hotel.id}
                                name={hotel.name}
                                location={hotel.location}
                                img={hotel.img}
                                availability={hotel.booked}
                                onClick={props.onClickSelect}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};
