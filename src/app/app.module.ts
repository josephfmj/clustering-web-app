import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuAppComponent } from './components/menu-app/menu-app.component';
import { LoadDataSectionAppComponent } from './components/load-data-section-app/load-data-section-app.component';
import { SearchDataSectionAppComponent } from './components/search-data-section-app/search-data-section-app.component';
import { LoadDataSectionUploadComponent } from './components/load-data-section-upload/load-data-section-upload.component';
// tslint:disable-next-line:max-line-length
import { LoadDataSectionDecimalOperatorComponent } from './components/load-data-section-decimal-operator/load-data-section-decimal-operator.component';
// tslint:disable-next-line:max-line-length
import { LoadDataSectionClusteringMethodComponent } from './components/load-data-section-clustering-method/load-data-section-clustering-method.component';
// tslint:disable-next-line:max-line-length
import { LoadDataSectionClusteringExecutionComponent } from './components/load-data-section-clustering-execution/load-data-section-clustering-execution.component';
import { MenuContentComponent } from './components/menu-content/menu-content.component';
// tslint:disable-next-line:max-line-length
import { LoadDataSectionParamsKmeansComponent } from './components/load-data-section-params-kmeans/load-data-section-params-kmeans.component';
import { LoadDataSectionParamsAgnesComponent } from './components/load-data-section-params-agnes/load-data-section-params-agnes.component';
import { LoadDataSectionParamsDianaComponent } from './components/load-data-section-params-diana/load-data-section-params-diana.component';
import { LoadDataSectionParamsPamComponent } from './components/load-data-section-params-pam/load-data-section-params-pam.component';
import { LoadDataSectionParamsClaraComponent } from './components/load-data-section-params-clara/load-data-section-params-clara.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule,
    MenuAppComponent,
    LoadDataSectionAppComponent,
    SearchDataSectionAppComponent,
    LoadDataSectionUploadComponent,
    LoadDataSectionDecimalOperatorComponent,
    LoadDataSectionClusteringMethodComponent,
    LoadDataSectionClusteringExecutionComponent,
    MenuContentComponent,
    LoadDataSectionParamsKmeansComponent,
    LoadDataSectionParamsAgnesComponent,
    LoadDataSectionParamsDianaComponent,
    LoadDataSectionParamsPamComponent,
    LoadDataSectionParamsClaraComponent
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
