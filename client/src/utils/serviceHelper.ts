import { responseInterceptor } from "./responseInterceptor";

export function serviceHelper(api: Promise<any>, success?, fail?, history?, location?) {
    api.then((response) => {
        responseInterceptor(response, success, fail, history, location);
    }).catch((error) => {
        responseInterceptor(error.response, success, fail, history);
    });
}
