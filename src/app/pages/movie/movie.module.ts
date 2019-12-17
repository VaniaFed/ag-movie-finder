import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from './movie.component';
import {MovieInfoComponent} from '../../movie-info/movie-info.component';
import {MovieHeaderComponent} from '../../movie-header/movie-header.component';
import {MovieListComponent} from '../../movie-list/movie-list.component';
import {AppButtonComponent} from '../../app-button/app-button.component';
import {LogoComponent} from '../../logo/logo.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    MovieComponent,
    MovieInfoComponent,
    MovieHeaderComponent,
    MovieListComponent,
    AppButtonComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports: [MovieComponent]
})
export class MovieModule { }
