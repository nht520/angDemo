import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  //1- 同步数据
  getdate() {
    console.log('9999')
  }
  // 2-callbck获取异步数据
  getquest(date) {
    setTimeout(() => {
      var name = '张三';
      // return name;
      date(name);
    }, 1000);
  }
  // 3-Promise获取异步数据
  getpromisdate() {
    return new Promise((resolve) => {
      setTimeout( () => {
        var name = 'Promise张三';
        resolve(name)
      }, 1000);
    });
  }
  // 4.rxjs 获取异步数据
  getrxjs() {
    return new Observable((res) => {
      setTimeout(() => {
        var username = '张三getrxjs';
        res.next(username);
        // res.error();
      }, 3000);
    })
  }
  // rjx多次执行
  gettrevalrxjs() {
    let count = 0;
    return new Observable((res) => {
      setInterval(() => {
        count ++;
        var username = '张三getrxjs' + count;
        res.next(username);
        // res.error();
      }, 1000);
    })
  }
  // rjx方法 用工具方法对返回的数据进行处理
  gettrevalrxjsnum() {
    let count = 0;
    return new Observable((res) => {
      setInterval(() => {
        count ++;
        res.next(count);
        // res.error();
      }, 1000);
    })
  }

}
