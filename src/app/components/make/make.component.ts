import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent implements OnInit {
  userFrom: any = {
    username: '',
    sex: 1,
    cityslist: ['北京', '上海', '深证'],
    citys: '1',
    mark: '',
    hobby: [
      {
        title: '吃饭',
        checked: false,
      },
      {
        title: '睡觉',
        checked: false,
      },
      {
        title: '看电视',
        checked: true,
      },
    ]
  };
  list: any = [];
  constructor() { }

  ngOnInit() {
  }
  // keyup也可以获取值
  // keyUp(e) {
  //   this.username = e.target.value;
  // }
  submit() {
    // demo操作也可以获取demo的值
    // let usernamdom:any =document.getElementById('username');
    console.log(this.userFrom);
    for (let item of this.userFrom.hobby) {
      if (  item.checked === true) {
        this .list.push(item);
      }
    }
    console.log(this .list)

    // console.log(
    //   this.userFrom.username + this.userFrom.sex + this.userFrom.citys
    // )
  }

}
