import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRouterModule} from './app-router.module';
import {BrowserModule} from '@angular/platform-browser';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
