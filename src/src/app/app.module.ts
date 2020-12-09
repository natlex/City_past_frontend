import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    FooterComponent,
    MainComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





