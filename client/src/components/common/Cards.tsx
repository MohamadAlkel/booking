import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "./elements/Button";


export interface CardsProps {
    id: number;
    name: string;
    location: string;
    img: string
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    availability: boolean;
    className?: string;
}


export const Cards: React.FunctionComponent<CardsProps> = React.memo((props: CardsProps): React.ReactElement<void> => {

    return (
        <div className={`${props.className ? props.className : ""}  card`} >
            <div className="warp-image">
                <img className="card-image" src={props.img} alt="photo-hotel" />
            </div>
            <div className="card-info">
                <h3 className="price">RM 1300</h3>
                <h3>{props.name}</h3>
                <h4>{props.location}</h4>
                {props.availability ?
                    <p className="availability">Not availability</p>
                    : <Link to={`/details/${props.id}`}>
                        <Button
                            id={props.name}
                            className="select-btn"
                            label="Select"
                            onClick={props.onClick}
                        />
                    </Link>

                }
            </div>
        </div>
    );
});
