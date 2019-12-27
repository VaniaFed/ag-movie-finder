import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from './movie.component';
import {MovieInfoComponent} from './movie-info/movie-info.component';
import {MovieHeaderComponent} from './movie-header/movie-header.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {MovieRoutingModule} from './movie.routing.module';

@NgModule({
  declarations: [
    MovieComponent,
    MovieInfoComponent,
    MovieHeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MovieRoutingModule,
    SharedModule
  ],
  exports: [MovieComponent]
})
export class MovieModule { }
