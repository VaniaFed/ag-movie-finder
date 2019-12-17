import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListComponent} from '../../movie-list/movie-list.component';
import {AppButtonComponent} from '../../app-button/app-button.component';
import {LogoComponent} from '../../logo/logo.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchHeaderComponent} from '../../search-header/search-header.component';
import {ToggleComponent} from '../../toggle/toggle.component';
import {SearchControlComponent} from '../../search-header/search-control/search-control.component';
import {SearchInfoComponent} from '../../search-info/search-info.component';
import {SearchComponent} from './search.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    SearchComponent,
    MovieListComponent,
    AppButtonComponent,
    LogoComponent,
    SearchHeaderComponent,
    ToggleComponent,
    SearchControlComponent,
    SearchInfoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
