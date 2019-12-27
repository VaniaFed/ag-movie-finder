import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArrayToStringPipe} from '../app/array-to-string.pipe';
import {ScaleOnHoverDirective} from '../app/scale-on-hover.directive';
import {CardMovieInfoComponent} from '../app/movie-list/card-movie-info/card-movie-info.component';
import {MovieListComponent} from '../app/movie-list/movie-list.component';
import {RouterModule} from '@angular/router';
import {AppButtonComponent} from '../app/app-button/app-button.component';
import {LogoComponent} from '../app/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ArrayToStringPipe,
    ScaleOnHoverDirective,
    CardMovieInfoComponent,
    MovieListComponent,
    AppButtonComponent,
    LogoComponent
  ],
  exports: [
    ArrayToStringPipe,
    CardMovieInfoComponent,
    ScaleOnHoverDirective,
    MovieListComponent,
    AppButtonComponent,
    LogoComponent
  ]
})
export class SharedModule { }
