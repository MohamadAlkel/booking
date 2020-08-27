import * as React from "react";

export interface ButtonProps {
    label?: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
    iconStyle?: string;
    id?: string;
    name?: string;
    title?: string;
    formId?: string;
    type?: "button" | "reset" | "submit";
}

export const Button: React.FunctionComponent<ButtonProps> = React.memo((props: ButtonProps): React.ReactElement<void> => {
    return (
        <div className={`btn-container ${(props.className ? props.className : "")}`}>
            <button
                className="button"
                id={props.id}
                name={props.name}
                type={props.type || "button"}
                disabled={props.disabled}
                title={props.title}
                onClick={props.onClick}
                form={props.formId}
            >
                <div className="button-content">
                    {(props.iconLeft) && <div className="btn-icon">{props.iconLeft}</div>}
                    <div className="button-label"> {props.label} </div>
                    {(props.iconRight) && <div className="btn-icon">{props.iconRight}</div>}
                </div>
            </button>
        </div>
    );
});
