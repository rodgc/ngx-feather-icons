import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FeatherModule } from './modules/feather/feather.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
