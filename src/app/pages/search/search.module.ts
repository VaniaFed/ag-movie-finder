import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SearchHeaderComponent} from './search-header/search-header.component';
import {ToggleComponent} from '../../toggle/toggle.component';
import {SearchControlComponent} from './search-header/search-control/search-control.component';
import {SearchInfoComponent} from './search-info/search-info.component';
import {SearchComponent} from './search.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {SearchRoutingModule} from './search.routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchHeaderComponent,
    ToggleComponent,
    SearchControlComponent,
    SearchInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SearchRoutingModule,
    SharedModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
