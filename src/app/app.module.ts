import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuAppComponent } from './components/menu-app/menu-app.component';
import { LoadDataSectionAppComponent } from './components/load-data-section-app/load-data-section-app.component';
import { SearchDataSectionAppComponent } from './components/search-data-section-app/search-data-section-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuAppComponent,
    LoadDataSectionAppComponent,
    SearchDataSectionAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
