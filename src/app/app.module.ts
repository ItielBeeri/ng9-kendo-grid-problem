import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'list', component: ListComponent}]),
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
