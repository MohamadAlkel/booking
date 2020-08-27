import * as React from "react";

export interface TextBoxProps {
    autoComplete?: "on" | "off";
    className?: string;
    disabled?: boolean;
    focus?: boolean;
    id?: string;
    label?: string;
    min?: number;
    max?: number;
    name: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    pattern?: any;
    placeholder?: string;
    readOnly?: boolean;
    reference?: React.RefObject<HTMLInputElement>;
    required?: boolean;
    type?: string;
    value: string | number;
    error?: any;
}

export const TextBox: React.FunctionComponent<TextBoxProps> = (props: TextBoxProps): React.ReactElement<void> => {
    return (
        <div className={`text-box-container  ${(props.className ? props.className : "")}`}>
            {props.label && <label className="label-text-box" htmlFor={props.id}>{props.label}</label>}
            <input
                id={props.id}
                name={props.name}
                className={`input-text-box ${props.error ? "border-error" : ""}`}
                type={props.type ? props.type : "text"}
                pattern={props.pattern}
                required={props.required}
                minLength={props.min}
                maxLength={props.max}
                value={String(props.value)}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
                onKeyPress={props.onKeyPress}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                autoFocus={props.focus}
                autoComplete={props.autoComplete}
                readOnly={props.readOnly}
                disabled={props.disabled}
                ref={props.reference}
            />
            {props.error && <p className="error-msg">{props.error}</p>}
        </div>
    );
};
