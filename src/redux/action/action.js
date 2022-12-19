import axios from "axios";
import { ACCESS_TOKEN, DOMAIN_FIVERR, TOKEN, USERLOGIN } from "../../util/setting";
import { DANG_XUAT, GET_MENU_LOAI_CONGVIEC, LOGIN, SEARCH_CONGVIEC } from "../types/type";



export const loaiCongViecAction = (dispatch2) => {
    let promise = axios({
        method: 'get',
        url: `${DOMAIN_FIVERR}/cong-viec/lay-menu-loai-cong-viec`,
        headers: {
            "TokenCybersoft": TOKEN
        }
    });
    promise.then((result) => {
        let action2 = {
            type: GET_MENU_LOAI_CONGVIEC,
            typesJob: result.data.content
        }
        // console.log(result.data.content)
        dispatch2(action2);

    });
    promise.catch(error => {
        console.log(error.response?.data);
    });
}

export const dangNhapAction = (userInfo) => {
    return (dispatch2) => {
        let promise = axios({
            method: 'post',
            url: `${DOMAIN_FIVERR}/auth/signin`,
            data: userInfo,
            headers: {
                "TokenCybersoft": TOKEN
            }
        });
        promise.then((result) => {
            // console.log(result.data)
            // lưu xuống local storage
            localStorage.setItem(ACCESS_TOKEN, result.data.content.token);

            let userInfo = JSON.stringify(result.data.content);
            localStorage.setItem(USERLOGIN, userInfo);
            let action = {
                type: LOGIN,
                uLogin: userInfo
            }
            dispatch2(action)

        });
        promise.catch(error => {
            console.log(error.response.data.content);
            let action = {
                type: LOGIN,
                errorLogin: error.response.data.content
            }
            dispatch2(action)
        });
    }
}

export const dangXuatAction = () => {
    return { type: DANG_XUAT };
};


