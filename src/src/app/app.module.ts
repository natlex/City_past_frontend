import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { DateSliderComponent } from './date-slider/date-slider.component'
import { NgModule } from '@angular/core'
import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { HeaderPanelComponent } from './header-panel/header-panel.component'
import { FooterComponent } from './footer/footer.component'
import { MainComponent } from './main/main.component'
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    FooterComponent,
    MainComponent,
    RightSidebarComponent,
    DateSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
