// 配置的路由模块
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { ClassComponent } from './components/class/class.component';
import { AboutComponent } from './components/about/about.component';
  import { AbtwelcomeComponent } from './components/about/abtwelcome/abtwelcome.component';
  import { SettingComponent } from './components/about/setting/setting.component';
import { TrolleyComponent } from './components/trolley/trolley.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path : 'class',
    component : ClassComponent
  },
  {
    path : 'about',
    component : AboutComponent,
    children: [
      {
        path : 'abtwelcome',
        component : AbtwelcomeComponent,
      },
      {
        path : 'setting',
        component : SettingComponent,
      },
        // 路由默认页面
      {
        path : '**',
        redirectTo : 'abtwelcome'
      },
    ]
  },
  {
    path : 'trolley',
    component : TrolleyComponent
  },
  // 动git传值
  // {
  //   path : 'details',
  //   component : DetailsComponent
  // },
  // 动态路由 path : 'details/:aid',
  {
    path : 'details/:aid',
    component : DetailsComponent
  },
  // 路由默认页面
  // {
  //   path : '**',
  //   redirectTo : 'class'
  // },
// 自定义模块路由
  {
    path: 'user', loadChildren: './module/user/user.module#UserModule',
  },
  {
    path: 'article', loadChildren: './module/article/article.module#ArticleModule'
  },
  {
    path: 'product', loadChildren: './module/product/product.module#ProductModule'
  },
  {
    path: '**', redirectTo: 'user'
  }


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
