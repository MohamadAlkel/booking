import * as React from "react";

export const enum iconTypesEnum {
    SEARCH_ICON,
    SEND_ICON,
    CLOSE_ICON
}

interface SvgElementProps {
    type: iconTypesEnum;
    className?: string;
    onClick?: (event) => void;
}

export const SvgElement: React.FunctionComponent<SvgElementProps> = React.memo((props: SvgElementProps): React.ReactElement<void> => {
    function renderIcon() {
        switch (props.type) {
            case iconTypesEnum.SEND_ICON: return <svg onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M-.778-.245h24v24h-24z" fill="none" /><path d="M49.753 12.353v6.89l9.002.74-9.002.739v6.89l15.279-7.628z" fill="#1d9f58" fillRule="evenodd" /><path d="M12.212 0A12.214 12.214 0 0 0 0 12.214a12.214 12.214 0 0 0 12.212 12.212 12.214 12.214 0 0 0 12.214-12.212A12.214 12.214 0 0 0 12.212 0zM7.611 5.585l13.275 6.629L7.61 18.84v-5.985l7.82-.642-7.82-.642z" fillRule="evenodd" /><circle cx="56.843" cy="-1.81" r="12" fillRule="evenodd" /></svg>;
            case iconTypesEnum.CLOSE_ICON: return <svg onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z" /></svg>;
            case iconTypesEnum.SEARCH_ICON: return <svg onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24"><path d="M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z" /></svg>;
            default: return <div />;
        }
    }
    return (renderIcon());
});
