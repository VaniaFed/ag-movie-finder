import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ToggleComponent } from './toggle/toggle.component';
import { SearchControlComponent } from './search-header/search-control/search-control.component';
import { ScaleOnHoverDirective } from './scale-on-hover.directive';
import { ArrayToStringPipe } from './array-to-string.pipe';
import { AppButtonComponent } from './app-button/app-button.component';
import { SearchInfoComponent } from './search-info/search-info.component';
import { MovieInfoComponent } from './movie-list/movie-info/movie-info.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieComponent } from './pages/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaleOnHoverDirective,
    SearchHeaderComponent,
    MovieListComponent,
    ToggleComponent,
    SearchControlComponent,
    ArrayToStringPipe,
    AppButtonComponent,
    SearchInfoComponent,
    MovieInfoComponent,
    SearchComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
