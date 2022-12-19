import { ACCESS_TOKEN, USERLOGIN } from "../../util/setting";
import { DANG_XUAT, GET_MENU_LOAI_CONGVIEC, LOGIN, SEARCH_CONGVIEC } from "../types/type";

// uLogin chứa userLogin từ localStorage
let uLogin = null;

if (localStorage.getItem(USERLOGIN)) {
    // có local
    uLogin = JSON.parse(localStorage.getItem(USERLOGIN));
}

const initialState = {
    typesJob: [],
    uLogin: uLogin,
    errorLogin: '',
    commentID: 0
}

export const reducerTong = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_LOAI_CONGVIEC:
            state.typesJob = action.typesJob;
            return { ...state };

        case SEARCH_CONGVIEC:
            state.searchDanhSachCongViecTheoTen = action.searchCongViec
            return { ...state }

        case LOGIN:
            state.uLogin = action.uLogin;
            state.errorLogin = action.errorLogin;
            return { ...state }

        case DANG_XUAT: {
            localStorage.removeItem(USERLOGIN);
            localStorage.removeItem(ACCESS_TOKEN);
            window.location.reload();
            return { ...state };
        }

        case 'GET_COMMENT_ID': 
            state.commentID = action.commentID;
            return {...state}

        default:
            return state
    }
}
