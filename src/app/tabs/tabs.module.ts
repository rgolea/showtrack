import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { HomeModule } from '../home/home.module';
import { TabsRoutingModule } from './tabs-routing.module';
import { ProgressModule } from '../progress/progress.module';



@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TabsRoutingModule
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
