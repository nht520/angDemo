import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BesurlService {
  api = 'http://wx.bomao.xyz:8080/distributor';
  // domainone:string = 'http://wx.bomao.xyz:8181/distributor';
  constructor(public http: HttpClient) { }
  window: any = {
    AXIOS_TIMEOUT: 10000,
    login: this.api + "/distributor/member/login",
    findById: this.api + "/distributor/member/findById",
    register: this.api + '/distributor/member/updatePass',
    mcMembers: this.api + '/distributor/mcMembers/findById',
    //我的库存
    getBoxNum: this.api + "/distributor/stock/getBoxNum",
    //订货订单
    stockLog: this.api + '/distributor/stockLog',
    //库存
    stock: this.api + '/distributor/stock',
    //  套餐
    meal: this.api + "/distributor/meal",
    mealDts: this.api + "/distributor/meal/findById?",
  }
  // 封装方法
  // get(api) {
  //   return new Promise((resolve, reject) => {
  //       this.http.get(this.domain + api).subscribe((response) => {
  //           resolve(response);
  //       });
  //   });
  // }
  // post(api) {
  //   return new Promise((resolve, reject) => {
  //       this.http.post(this.domain + api).subscribe((response) => {
  //           resolve(response);
  //       });
  //   });
  // }
}
