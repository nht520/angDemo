import { Component, OnInit, ViewChild } from '@angular/core';

@ Component({
  selector: 'app-dom-view',
  templateUrl: './dom-view.component.html',
  styleUrls: ['./dom-view.component.css']
})
export class DomViewComponent implements OnInit {
  red: any = 'blue';
  flag: any = true;
  show: any = true;
  nambel: number = 0;
  title : any = "我是父组件传递过来的值";
  constructor() { }
//  ngOnInit组件和指令初始化完成，并不是真正的deom加载完成
  ngOnInit() {
  }
  // viewChild 操作demo节点
  // 1.给demo起一个名字
  // 2.在业务逻辑里面引入viewChild
  // 3.写在类里面 @ ViewChild('mybox') myBox: any;
  // 4.ngAfterViewInit 生命周期函数里面获取dom this.myBOx.nativeElement
  @ ViewChild('mybox') myBox: any;
  // 父组件调用子组件的方法
  @ ViewChild('header') header: any;
  // ngAfterViewInit demo 加載完成
  ngAfterViewInit(): void {
     // 原生js操作demo
     const obx: any = document.getElementById("deom");
     obx.style.color="red";
     console.log(obx.innerHTML);
     //
     console.log( this .myBox.nativeElement.innerHTML);
     this .myBox.nativeElement.style.color='blue';

  }

  huoqu() {
    // 调用获取子组件的方法和数据
    this .header.run()
    console.log(this .header.title)
  }
  frun(){
    console.log('我是负组件的方法')
  }
  side() {
    // this .show = !this .show;
    const sdShow: any = document.getElementById("aside");
    // sdShow.style.transform="translate(0, 0)";
    if ( this .nambel === 0 ) {
      sdShow.style.transform="translate(0, 0)";
      this .nambel = 1;
    }else if( this .nambel === 1 ){
      sdShow.style.transform="translate(-100%, 0)";
      this .nambel = 0;
    }
  }

}
