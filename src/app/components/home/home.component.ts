import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('imchild') imchild: any;
  @ViewChild('userpicr') userpicr :any;
  title = '我是一个HOME组件';
  imgUrl = 'https://www.baidu.com/img/baidu_jgylogo3.gif';
  flag = true;
  userflag = false;
  userTitle = "";
  list = [
    {
      id: 1,
      title: '大哥'
    },
    {
      id: 2,
      title: '大哥1'
    },
    {
      id: 3,
      title: '大哥2'
    },
    {
      id: 4,
      title: '大大2'
    }
  ];
  attr = 'red';
  orderstatus: number = 2; /* 待支付 2 未支付 3待收获 4已收货*/
  constructor() { }

  ngOnInit() {
    console.log('我是一个homezujian');
  }
  huoqu(e){
    console.log(e.target.innerHTML)
    this.userflag = !this.userflag;
  }
  ngAfterViewInit(): void {
    // 注意 viewChild获取的值要放在ngAfterViewInit里面先赋值 
    this.userTitle = this .imchild.nativeElement.innerHTML
  }
  // 获取值
  submit(){
    console.log(this.userTitle);
  }
  

}
