import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  son: any = '我是子组件的数据';
  // 接受伏组件传递过来的数据
  @ Input() title: any;
  // 接受伏组件传递过来的方法
  @ Input() run: any;
  // 接受整个伏组件
  @ Input() father: any;
  // 给父组件广播数据
  @ Output() private outer = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  sonbt() {
    console.log("我是子组件的方法")
  }
  submit(){
    console.log(this.title)
    this.run()
    console.log(this.father.msg)
  }
  sendParent(){
    this.outer.emit("我是子组件的数组")
  }
}
