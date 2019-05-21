import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  title: any = '999999999';
  @ViewChild('father') father: any;
  constructor() { }
  ngOnInit() {
  }
  run (){
    console.log("我是伏组件的方法")
  }
  // 获取子组件的数据 方法
  ftbuttom (){
    console.log(this.father.son);
    this.father.sonbt();
  }
  // 接收子组件广播的数据
  huoqu(e) {
    console.log(e)
  }
}
