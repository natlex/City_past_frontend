import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HeaderPanelComponent } from './header-panel/header-panel.component'
import { FooterComponent } from './footer/footer.component'
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { environment } from '../environments/environment';
import { MapsModule } from './main/maps.module';
import { GoogleMapConfig } from './main/models/google-map-config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    FooterComponent,
    RightSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MapsModule.forRoot(<GoogleMapConfig>{
      googleMapApiKey: environment.googleMapApiKey,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
