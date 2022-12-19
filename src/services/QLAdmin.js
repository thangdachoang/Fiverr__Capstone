import axios from "axios";
import { ACCESS_TOKEN, DOMAIN_FIVERR, TOKEN } from "../util/setting";

export class QLAdmin {
  layDSND = () => {
    return axios({
      url: `${DOMAIN_FIVERR}/users`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  };
  addND = (thongTinNguoiDung) => {
    return axios({
      url: `${DOMAIN_FIVERR}/users`,
      method: "POST",
      data: thongTinNguoiDung,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  }
  editND = (id, thongTinNguoiDung) => {
    return axios({
      url: `${DOMAIN_FIVERR}/users/${id}`,
      method: "PUT",
      data: thongTinNguoiDung,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  };
  deleteND = (taiKhoan) =>{
    return axios({
      url: `${DOMAIN_FIVERR}/users?id=${taiKhoan}`,
      method: "DELETE",
      headers: {
        TokenCybersoft: TOKEN,
      },
  })
};
layDSCV = () => {
  return axios({
    url: `${DOMAIN_FIVERR}/cong-viec`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN,
    },
  });
};
deleteCV = (id) =>{
  return axios({
    url: `${DOMAIN_FIVERR}/cong-viec/${id}`,
    method: "DELETE",
    headers: {
      Token : localStorage.getItem(ACCESS_TOKEN),
      TokenCybersoft: TOKEN,
    },
})
};

layDSLCV = () =>{
  return axios({
    url: `${DOMAIN_FIVERR}/loai-cong-viec`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN,
    },
  });
}
addLCV = (data) => {
  return axios({
    url: `${DOMAIN_FIVERR}/loai-cong-viec`,
    method: "POST",
    data: data,
    headers: {
      Token : localStorage.getItem(ACCESS_TOKEN),
      TokenCybersoft: TOKEN,
    },
  });
}
editLCV = (id,data) =>{
  return axios({
    url: `${DOMAIN_FIVERR}/loai-cong-viec/${id}`,
    method: "PUT",
    data: data,
    headers: {
      Token : localStorage.getItem(ACCESS_TOKEN),
      TokenCybersoft: TOKEN,
    },
  });
}
deleteLCV =(id) =>{
  return axios({
    url: `${DOMAIN_FIVERR}/loai-cong-viec/${id}`,
    method: "DELETE",
    headers: {
      Token : localStorage.getItem(ACCESS_TOKEN),
      TokenCybersoft: TOKEN,
    },
  });
}
layDSDV = () =>{
  return axios({
    url: `${DOMAIN_FIVERR}/thue-cong-viec`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN,
    },
  });
}
editDV = (id,data) =>{
  return axios({
    url: `${DOMAIN_FIVERR}/thue-cong-viec/${id}`,
    method: "PUT",
    data: data,
    headers: {
      Token : localStorage.getItem(ACCESS_TOKEN),
      TokenCybersoft: TOKEN,
    },
  });
}
deleteDV =(id) =>{
  return axios({
    url: `${DOMAIN_FIVERR}/thue-cong-viec/${id}`,
    method: "DELETE",
    headers: {
      Token : localStorage.getItem(ACCESS_TOKEN),
      TokenCybersoft: TOKEN,
    },
  });
}
}
export const qlyAdmin = new QLAdmin();
