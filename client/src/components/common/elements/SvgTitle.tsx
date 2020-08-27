import * as React from "react";

export const enum iconTypesEnum {
    LIST,
    MY_BOOKING
}

interface SvgTitleProps {
    type: iconTypesEnum;
    className?: string;
    onClick?: (event) => void;
}

export const SvgTitle: React.FunctionComponent<SvgTitleProps> = React.memo((props: SvgTitleProps): React.ReactElement<void> => {
    function renderIcon() {
        switch (props.type) {
            case iconTypesEnum.LIST: return <svg onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z" /></svg>;
            case iconTypesEnum.MY_BOOKING: return <svg onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M10,17H5v-2h5V17z M10,13H5v-2h5V13z M10,9H5V7h5V9z M14.82,15L12,12.16l1.41-1.41l1.41,1.42L17.99,9 l1.42,1.42L14.82,15z" fillRule="evenodd" /></g></g></svg>;
            default: return <div />;
        }
    }
    return (renderIcon());
});
