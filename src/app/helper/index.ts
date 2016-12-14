import {URL_ROOT} from "../settings";

export function url(path: string) {
    return `${URL_ROOT}/${path}`;
}
