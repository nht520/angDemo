import { Component, OnInit, Input } from '@angular/core';

@ Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Input获取父组件传过来的值 和方法
  @Input() name : string;
  @Input() frun : any;
  constructor() { }
  run() {
    console.log('我是子组件里面的方法')
    console.log(this.name);
  }

  ngOnInit() {
    // 执行负组件的方法
    this.frun()
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

}
