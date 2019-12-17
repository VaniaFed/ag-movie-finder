import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArrayToStringPipe} from '../app/array-to-string.pipe';
import {ScaleOnHoverDirective} from '../app/scale-on-hover.directive';
import {CardMovieInfoComponent} from '../app/movie-list/card-movie-info/card-movie-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArrayToStringPipe,
    ScaleOnHoverDirective,
    CardMovieInfoComponent,
  ],
  exports: [
    ArrayToStringPipe,
    CardMovieInfoComponent,
    ScaleOnHoverDirective
  ]
})
export class SharedModule { }
