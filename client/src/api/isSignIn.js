import Cookies from "js-cookie";

export const isSignIn = () => {
    const access_token = Cookies.get("access_token");
    if (access_token) {
        return true;
    }
    return false;
}