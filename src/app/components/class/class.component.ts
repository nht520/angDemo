import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// 引入服务
import { BesurlService } from '../../services/besurl.service';
//
import Axios from 'axios';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  list: any = [];
  constructor( public router: Router, public besurl: BesurlService,) {

  }

  ngOnInit() {
    // 请求数据列表
    const api = this.besurl.window.meal;
    Axios.get(api).then((res) => {
      console.log(res);
      this.list = res.data.records;
    });
    // for (  let i = 0; i <= 5; i++) {
    //   this.list.push('这是第' + i + '数据');
    // }

  }
  // <!-- jsgit跳转  普通路由 和动态路由 -->
  // import { Router } from '@angular/router';
  // constructor( public router:Router) { }
  // this.router.navigate(['/details','123'])
  dtrouter() {
    // 动态路由
    this.router.navigate( ['/details', '11'] );
    // 普通路由
    // this.router.navigate(['/about']);
  }
  gitrouter() {
    // 跳转并进行git传值
    this.router.navigate(['/details'], {
      queryParams: {
        aid: 123
      }
    })
  }

}
/*

js跳转路由
    1、动态路由
      1、引入声明模块
          import { Router} from '@angular/router';
          constructor(public router:Router) { }
       2、跳转
         this.router.navigate(['/home']);
         this.router.navigate(['/newscontent/','1243'])
    2、get传值
       1、引入声明模块
          import { Router} from '@angular/router';
          constructor(public router:Router) { }
       2、跳转
       this.router.navigate(['/news'],{
          queryParams:{
            aid:123
          }
       });

*/