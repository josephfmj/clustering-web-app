import { SectionType } from 'src/app/shared/models/section-type.enum';
import { ClusteringRequest } from './../../shared/models/clustering-request';
import { FormDataBuilderUtilService } from './../../shared/utils/form-data-builder-util.service';
import { ViewClusteringDataService } from '../../shared/services/view-clustering-data.service';
import { ClusteringMethodConfig } from './../../shared/models/clustering-method-config';
import { ViewLoadData } from './../../shared/models/view-load-data';
import { ViewDisplayHelperService } from './../../shared/services/view-display-helper.service';
import { HttpService } from './../../shared/services/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUrl } from 'src/app/shared/models/service-url.enum';

@Component({
  selector: 'app-load-data-section-app',
  templateUrl: './load-data-section-app.component.html',
  styleUrls: ['./load-data-section-app.component.css']
})
export class LoadDataSectionAppComponent implements OnInit {

  clusteringHttpService: HttpService;
  viewHelperService: ViewDisplayHelperService;
  viewDataService: ViewClusteringDataService;
  requestBuilder: FormDataBuilderUtilService;
  clusteringMethodSection: SectionType;
  clusteringUploadSection: boolean;
  currentView: SectionType = SectionType.CLUSTERING_METHOD_SECTION;
  clusteringConfig: ClusteringMethodConfig[];
  viewLoadData: ViewLoadData;
  executionId: string;
  resultVisible: boolean;
  clusteringMethodList: string[];
  selectedClusterigMethodParams: Map<string, any>;
  suscripton1: any;
  suscripton2: any;
  suscripton3: any;

  constructor(
    clusteringHttpService: HttpService,
    viewHelperService: ViewDisplayHelperService,
    viewDataService: ViewClusteringDataService,
    requestBuilder: FormDataBuilderUtilService) {

      this.clusteringHttpService = clusteringHttpService;
      this.viewHelperService = viewHelperService;
      this.viewDataService = viewDataService;
      this.requestBuilder = requestBuilder;

      this.viewLoadData = new ViewLoadData();
      this.clusteringHttpService
      .getAllClusteringMehtod(ServiceUrl.CLUSTERING_METHODS)
      .subscribe( data => this.prepareData(data));

      this.viewDataService
      .getViewClustering()
      .subscribe( data => {
        console.log('this' + data);
        this.setLoadData(data); });

      this.viewHelperService
      .getViewDisplayHelper()
      .subscribe(data => this.resolveView(data));

      this.currentView = SectionType.CLUSTERING_METHOD_SECTION;
      this.resultVisible = false;

  }

  ngOnInit() {
  }


  private resolveView(section: SectionType): void {

    if (section === SectionType.SEND_DATA) {
      const clusteringRequest = new ClusteringRequest();
      console.log(JSON.stringify(this.viewLoadData));
      clusteringRequest.data = this.viewLoadData.params;
      clusteringRequest.data['METHOD_NAME'] = this.viewLoadData.method;
      clusteringRequest.csvFile = this.viewLoadData.file;
      console.log(JSON.stringify(clusteringRequest));
      const formData = this.requestBuilder.buildClusteringFormDataRequest(clusteringRequest);
      this.clusteringHttpService
      .sendClusteringData(ServiceUrl.SEND_CLUSTERING_DATA, formData)
      .subscribe(response => {
        console.log(response);
        this.executionId = response.executionId;
        this.resultVisible = true;
      });

    } else {
      this.currentView = section;
    }

    if (this.currentView === SectionType.PARAMS_SECTION) {
      this.clusteringMethodSection = this.resolveParamsSection(this.viewLoadData.method);
      console.log('params method ' + this.clusteringMethodSection);
      this.getMethodParams();
    }
  }

  private prepareData(data: ClusteringMethodConfig[]): void {
    this.clusteringConfig = data;
    this.clusteringMethodList = data.map( method => method.name);
    console.log('clustering dat from service');
    console.log(data);
  }

  private getMethodParams(): void {

    this.selectedClusterigMethodParams = this.clusteringConfig
    .filter(method => method.name === this.viewLoadData.method )
    .map(method => method.params)
    .shift();

    console.log('selected paramas');
    console.log(this.selectedClusterigMethodParams);
  }

  private resolveParamsSection(name: string): SectionType {

    return Object.keys(SectionType)
    .filter( section => section.toString().includes(name))
    .map(section => SectionType[section])
    .shift();

  }

  private setLoadData(data: ViewLoadData): void {
    console.log('mi data-- ' + JSON.stringify(this.viewLoadData));
    console.log('this data-- ' + JSON.stringify(data));
    this.viewLoadData.method = data.method;
    this.viewLoadData.decimalSeparator = data.decimalSeparator;
    this.viewLoadData.params = data.params;
    this.viewLoadData.file = data.file;
    console.log('set mi data-- ' + JSON.stringify(this.viewLoadData));
  }

  private checkView(type: string): boolean {
    console.log('viewee: ' + this.currentView);
    const section = SectionType[type];
    if (this.currentView === SectionType.PARAMS_SECTION) {
      return this.clusteringMethodSection === section;
    } else {
      console.log('view: ' + this.currentView + ' vall-- ' + (this.currentView === section) + ' ' + 'CLUster ' + SectionType[type]);
      return this.currentView === section;
    }
  }

}
