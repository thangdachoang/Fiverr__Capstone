import axios from "axios";
import { DOMAIN_FIVERR, TOKEN } from "../../util/setting";





export const layChiTietThongTinCaNhanAction = (id) =>{
    return axios({
            method: 'get',
            url: `${DOMAIN_FIVERR}/users/${id}`,
            headers: {
                "TokenCybersoft": TOKEN
            }
        });
}







