import * as React from "react";
import DatePicker from "react-date-picker";

export interface DatepickerProps {
    name?: string;
    onChange: (date: any) => void;
    value: Date;
    label?: string;
    format?: string;
    clearIcon?: any;
    calendarIcon?: any;
    className?: string;
    maxDetail?: any;
    minDetail?: any;
    disabled?: boolean;
    error?: string;
}

export const Datepicker: React.FunctionComponent<DatepickerProps> = (props: DatepickerProps): React.ReactElement<void> => {

    return (
        <div className={`${props.className ? props.className : ""}  date-wrapper`}>
            {props.label && <p className="label"> {props.label} </p>}
            <DatePicker
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                format={props.format}
                minDetail={props.minDetail}
                maxDetail={props.maxDetail}
                calendarIcon={props.calendarIcon}
                clearIcon={props.calendarIcon ? props.calendarIcon : null}
                disabled={props.disabled}
                className={`datepicker ${props.error ? "border-error" : ""}`}
            />
            {props.error && <p className="error-msg">{props.error}</p>}
        </div>
    );
};
