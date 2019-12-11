import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ToggleComponent } from './toggle/toggle.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ScaleOnHoverDirective } from './scale-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScaleOnHoverDirective,
    SearchHeaderComponent,
    MovieListComponent,
    ToggleComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
