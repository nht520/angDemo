import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  list = '我是一个登录组件哦！';
  // 定义数据的时候  指定数据类型 any任意数据类型
  username = '我是张三';
  student: any = 123;
  title = '试试看而已';
  from: any = {
    username: '系統',
    psword: '123456',
  };
  message: any;
  content = '<h2>我是一个h2标签,解析html标签</h2>';
  active: 'active';
  /*
  声明属性的几种方式
  public 共有 *（默认） 可以在这个类里面使用，也可以在这个类外面使用，
  protected 保护类型  他只有在当前类和他的子类里面可以访问，
  private 私有  只有在当类才可以访问这个属性
    */
  // 定义数组
  // 推荐写法 public list:any[]=['1','2','3'];
  public items:Array<any>=[222,666,666];
   List = [
     {
       id: 1,
       useranme: '张三',
     },
     {
       id: 2,
       useranme: '李四',
     }
   ];
    cars = [
      {
        cate: '宝马',
        list: [
          {
            title: '宝马q1',
            price: '30万'
          },
          {
            title: '宝马w2',
            price: '40万'
          }
        ],
      },
      {
        cate: '大众',
        list: [
          {
            title: '大众a',
            price: '10万'
          },
          {
            title: '大众b',
            price: '100万'
          }
        ],
      }
    ];

  constructor() {
    this.username = '我是改变后的username';

  }

  ngOnInit() {

  }

}
