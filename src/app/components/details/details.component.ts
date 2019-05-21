import { Component, OnInit } from '@angular/core';
// 获取git传值 ，首先引入import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// 引入服务
import { BesurlService } from '../../services/besurl.service';
import Axios from 'axios';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public besurl: BesurlService ) { }
  detailsId: any = '';
  list: any = [];
  ngOnInit() {
    // 获取git传值
    // this.route.queryParams.subscribe((data) => {
    //     console.log(data.aid + '----git传值');
    // })
    // 获取动态路由传值
    this.route.params.subscribe((data) => {
        console.log(data.aid+"路由");
        this.detailsId = data.aid;
    });
    // 获取详情
    const date = {
        params: {
            id: this.detailsId,
        }
    };
    const api = this.besurl.window.mealDts;
    Axios.get(api, date).then((res) => {
      console.log(res);
      this.list = res.data.data;
      // this.list = response.records;
    });
  }

}
