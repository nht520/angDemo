import { Component, OnInit } from '@angular/core';
// 引入服务
import { StorageService } from '../../services/storage.service';
// 可以使用不推荐
// var storage = new StorageService();
// console.log(storage)
// 官方推荐
@ Component({
  selector: 'app-totdlist',
  templateUrl: './totdlist.component.html',
  styleUrls: ['./totdlist.component.css']
})
export class TotdlistComponent implements OnInit {
  name: any = '';
  list: any = [];
  addnaame: any = '';
  todoList: any = [];
  nglist: any =[
    {
      title:"1111",
      id:1
    },
    {
      title:"2222",
      id:0
    },
    {
      title:"333",
      id:0
    },
    {
      title:"444",
      id:1
    },
  ];
// 官方推荐
  constructor( public storage: StorageService) {
    // console.log(    this.storage.get() )
  }

  ngOnInit() {
    this.searchList();
  }
  handle(time: number): void {
    // [time] is string
    // date style follow format props
    console.log(time)
  }
  // 判断有无数据
  searchList() {
    // 判断赋值
    const storList: any = this.storage.get('search');
    if(storList === undefined || storList ===null){
      this.list = this.list;
    }else{
      this.list = storList
    }
    const toList: any = this.storage.get('toList');
    if(toList === undefined || toList ===null){
      this.todoList = this.todoList;
    }else{
      this.todoList = toList
    }
  }
  serch() {
    // 避免出现重复数据
    if (this.list.indexOf(this.name) == -1) {
      this.list.push(this.name);
      this.storage.set('search', this.list);
    }
    this.name = '';
    console.log(this.name);
  }
  delt(key: any) {
    this.list.splice(key,1);
    this.storage.set('search', this.list);
  }
  add() {

  }

  keyup(e) {
    if (e.keyCode === 13) {
      if (!this.tolistKeyword(this.todoList, this.addnaame)) {
        this.todoList.push({
          title: this.addnaame,
          status: 0
        });
        this.storage.set('toList', this.todoList);
        this.addnaame = '';
      } else {
        console.log('数组已存在');
      }
    }
  }
  cheack() {
    this.storage.set('toList', this.todoList);
  }
  addDelt(key: any) {
    this.todoList.splice(key,1);
    this.storage.set('toList', this.todoList);
  }
  // 如果数组里面有addname
  tolistKeyword(todoList: any, addnaame: any) {
    // todoList.forEach(value => {
    //   if (value.title == addnaame) {
    //     return true;
    //   }
    // });
    if (!addnaame) return false;
    for ( var i = 0; i < todoList.length; i++  ) {
     if ( todoList[i].title == addnaame) {
      return true;
     }
    }
    return false;
  }
}
