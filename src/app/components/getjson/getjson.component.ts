import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//  使用服务里面的axios 获取数据
import { HttpserviceService } from '../../services/httpservice.service';
import Axios from 'axios';
@Component({
  selector: 'app-getjson',
  templateUrl: './getjson.component.html',
  styleUrls: ['./getjson.component.css']
})
export class GetjsonComponent implements OnInit {
  list: any = [];

  constructor(
    public http:HttpClient,
    public httpserve:HttpserviceService) { 

    }

  ngOnInit() {
  }
  // 请求数据
  getdate() {
    let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((res: any) => {
      console.log(res);
      this.list = res.result;
    })
  }
  // 提交数据
  postdate() {
    const httpOptions ={ headers: new HttpHeaders({ 'content-Type': 'application/json'})};
    let api = "http://a.itying.com/api/productlist";
    this.http.post(api, 1, httpOptions).subscribe((res: any) => {
      console.log(res);
      this.list = res.result;
    })
  }
  // jsonp 获取数据
  getjsonp() {
    const httpOptions ={ headers: new HttpHeaders({ 'content-Type': 'application/json'})};
    let api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api, 'callback').subscribe((res: any) => {
      console.log(res);
      this.list = res.result;
    })
  }
  // Axios 请求数据
  getaxios() {
    let api = "http://a.itying.com/api/productlist";
    // 封装方法
    // this.httpserve.axiosGet(api).then((data) => {
    //   console.log(data)
    // })
    Axios.get(api).then((res: any) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
}
