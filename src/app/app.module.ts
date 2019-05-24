// browserModule游览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// anglar 核心模块
import { NgModule } from '@angular/core';
// 引入form模块 才可以使用双向绑定模块
import { FormsModule } from '@angular/forms';
// 引入HttpClientModule
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// 引入自定义模块
import { UserModule } from './module/user/user.module';
// 引入外部UI组件 样式
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElModule } from 'element-angular';
import 'element-angular/theme/index.css';
// if you use webpack, import style;
// 根组件
// 引入组件
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { MakeComponent } from './components/make/make.component';
import { TotdlistComponent } from './components/totdlist/totdlist.component';
import { DomViewComponent } from './components/dom-view/dom-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { RequestComponent } from './components/request/request.component';
import { GetjsonComponent } from './components/getjson/getjson.component';
import { ClassComponent } from './components/class/class.component';
import { AboutComponent } from './components/about/about.component';
import { TrolleyComponent } from './components/trolley/trolley.component';
import { DetailsComponent } from './components/details/details.component';
import { AbtwelcomeComponent } from './components/about/abtwelcome/abtwelcome.component';
import { SettingComponent } from './components/about/setting/setting.component';
// 引入并且配置服务  方法共享
import { StorageService } from './services/storage.service';
import { HttpserviceService } from './services/httpservice.service';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// @NgModule装饰器 ， @NGMOdule接受一个元数据对象，告诉angular 如何编译和启动应用
@NgModule({
  declarations: [ /*配置当前项目运行的组件*/
    AppComponent, LoginComponent, HomeComponent,
    NewsComponent, MakeComponent, TotdlistComponent,
    DomViewComponent, HeaderComponent, FatherComponent,
    SonComponent, RequestComponent, GetjsonComponent,
     ClassComponent, TrolleyComponent, DetailsComponent, AbtwelcomeComponent, SettingComponent, AboutComponent
  ],
  imports: [ /*配置当前模块运行以来的其他模块  自定义模块*/
    BrowserModule, FormsModule, HttpClientModule,
    HttpClientJsonpModule, AppRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
     /** 导入 ng-zorro-antd 模块 **/
  ],
  providers: [
    StorageService, HttpserviceService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ], /*配置项目所需要的服务*/
  /* bootstrap 指定应用的主视图(称为根组件) 通过引导根Appmodule来启动应用，一版是根组件 */
  bootstrap: [AppComponent]
})
// 根模块不需要导出任何东西，因为其他组件不需要要导入根模块
// ng component 创建新组件
export class AppModule { }
