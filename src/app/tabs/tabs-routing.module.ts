import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
// component: TabsComponent,
// children: [
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'progress',
//     component: ProgressComponent
//   },
//   {
//     path: 'statistics',
//     component: HomeComponent
//   }
// ]
const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('../progress/progress.module').then(m => m.ProgressModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('../statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
