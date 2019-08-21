import { ViewClusteringDataService } from '../../shared/services/view-clustering-data.service';
import { ClusteringMethodConfig } from './../../shared/models/clustering-method-config';
import { ViewLoadData } from './../../shared/models/view-load-data';
import { SectionType } from './../../shared/models/section-type.enum';
import { ViewDisplayHelperService } from './../../shared/services/view-display-helper.service';
import { HttpService } from './../../shared/services/http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IfStmt } from '@angular/compiler';
import { ViewNavigation } from 'src/app/shared/models/view-navigation';

@Component({
  selector: 'app-load-data-section-app',
  templateUrl: './load-data-section-app.component.html',
  styleUrls: ['./load-data-section-app.component.css']
})
export class LoadDataSectionAppComponent implements OnInit {

  clusteringHttpService: HttpService;
  viewHelperService: ViewDisplayHelperService;
  viewDataService: ViewClusteringDataService;
  viewObservable: Observable<SectionType>;
  clusteringMethodSection: SectionType;
  clusteringUploadSection: boolean;
  viewNavigation: ViewNavigation;
  currentView: SectionType;
  clusteringConfig: ClusteringMethodConfig[];
  viewLoadData: ViewLoadData;
  clusteringMethodList: string[];
  selectedClusterigMethodParams: Map<string, any>;

  constructor(
    clusteringHttpService: HttpService,
    viewHelperService: ViewDisplayHelperService,
    viewDataService: ViewClusteringDataService) {

      this.clusteringHttpService = clusteringHttpService;
      this.viewHelperService = viewHelperService;
      this.viewDataService = viewDataService;
      this.viewObservable = this.viewHelperService.getViewDisplayHelper();
      this.viewNavigation = new ViewNavigation();
      this.currentView = SectionType.CLUSTERING_METHOD_SECTION;

  }

  ngOnInit() {
    this.clusteringHttpService
    .getAllClusteringMehtod('')
    .subscribe( data => this.prepareData(data));

    this.viewDataService
    .getViewClustering()
    .subscribe( data => {this.viewLoadData = data; console.log(data); });

    this.viewObservable
    .subscribe(data => this.resolveView(data));
  }


  private resolveView(section: SectionType): void {

    this.currentView = section;
    if (this.currentView === SectionType.PARAMS_SECTION) {
      this.clusteringMethodSection = this.resolveParamsSection(this.viewLoadData.method);
      console.log('params method ' + this.clusteringMethodSection);
      this.getMethodParams();
    }

    if (this.currentView === SectionType.UPLOAD_SECTION) {
      
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
    .map(method => method.paramters)
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

}
