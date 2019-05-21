import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  time = new Date();
  title = '我是一个title';
  title1 = 'button';
  show = true;
  username = '9999';
  constructor() {

    console.log(this.time);
  }

  ngOnInit() {
  }
  run() {
    console.log(this.title);
  //  改变数据
    this.title = '点击';
  }
  // keyDown(e) {
  //   console.log(e);
  //   console.log(e.target.value);
  // }
  // 按到回车后获取值
  keyUp(e) {
    this.username = e.target.value;
    if (e.keyCode === 13) {
      this.username = e.target.value;
      console.log(e.target.value);
    }
  }
  submit() {
    console.log(this.username);
    this.username = '我要改变你';
  }

}












