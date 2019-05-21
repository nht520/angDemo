import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
// 引入服务
import { RequestService } from '../../services/request.service';
import { promise } from 'protractor';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(public quest: RequestService) { }

  ngOnInit() {
    //1. 同步方法
    // const data = this.quest.getdate();
    // console.log(data);

    //2. callback获取异步数据
    // this.quest.getquest((data)=>{
    //   console.log(data)
    // });

    // 3.promise获取异步数据
      // let promisDate = this.quest.getpromisdate();
      // promisDate.then((date) => {
      //   console.log(date);
      // })
    // 4.rxjs获取异步方法里面的数据
      // var rxjsDate =this.quest.getrxjs();
      // rxjsDate.subscribe((data) => {
      //   console.log(data)
      // })
      // s 过一秒撤回刚才的操作
      // var streem = this.quest.getrxjs();
      // var d = streem.subscribe((data) => {
      //   console.log(data)
      // });
      // setTimeout(() => {
      //   d.unsubscribe(); /*取消订阅*/
      // },1000)
      // rxjs 多次执行方法
      // var streem = this.quest.gettrevalrxjs();
      // streem.subscribe((data) => {
      //   console.log(data)
      // });
      // 8 用工具方法对返回的数据进行处理 过滤
        // var streem = this.quest.gettrevalrxjsnum();
        // streem.pipe(
        //   filter((value) => {
        //       if( value%2 === 0) {
        //         return true;
        //       }
        //   })
        // )
        // .subscribe((data) => {
        //   console.log(data);
        // });
        // var streem = this.quest.gettrevalrxjsnum();
        // streem.pipe(
        //   map((value) => {
        //       return value*value;
        //   })
        // )
        // .subscribe((data) => {
        //   console.log(data);
        // });
        // var streem = this.quest.gettrevalrxjsnum();
        // streem.pipe(
        //   filter((value) => {
        //       if( value%2 === 0) {
        //         return true;
        //       }
        //   }),
        //   map((value) => {
        //       return value*value;
        //   })
        // )
        // .subscribe((data) => {
        //   console.log(data);
        // });





    }


}
