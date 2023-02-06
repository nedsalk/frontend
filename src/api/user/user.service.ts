import { ThunderURL } from "../index";
import { ICreateUser, IUserResponse } from "./user.type";
import { ApiResponse } from "../HttpClient";

export default {
  getUser(params: any): Promise<ApiResponse<IUserResponse>> {
    const urlParams = new URLSearchParams();
    Object.keys(params).forEach((key: any) => {
      if (Array.isArray(params[key])) {
        params[key].forEach((val: any) => {
          urlParams.append(key, val);
        });
      } else {
        urlParams.append(key, params[key]);
      }
    });

    return ThunderURL.get("v1/user", { params: urlParams });
  },
  getFilters(data: any): Promise<ApiResponse<{ filters: [] }>> {
    return ThunderURL.post("v1/user/getfilters", data);
  },
  createUser(body: ICreateUser) {
    return ThunderURL.post("v1/user", body);
  },
  userCreate(address: string) {
    return ThunderURL.post("v1/user/create", {}, { params: { address } });
  },
  followUser(body: ICreateUser) {
    return ThunderURL.post("v1/user/follow", body);
  },
  isLiked(data: any): Promise<ApiResponse<any>> {
    return ThunderURL.get("v1/user/isLiked", { params: data });
  },
};
