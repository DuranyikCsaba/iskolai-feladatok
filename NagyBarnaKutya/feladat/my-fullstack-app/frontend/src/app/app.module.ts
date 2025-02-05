import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostDataComponent } from './components/post-data/post-data.component';
import { GetDataComponent } from './components/get-data/get-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDataComponent,
    GetDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }