import { SectionType } from './../../shared/models/section-type.enum';
import { KmeansFields } from './../../shared/models/kmeans-fields.enum';
import { Component, OnInit, Input } from '@angular/core';
import { ViewClusteringDataService } from 'src/app/shared/services/view-clustering-data.service';
import { ViewDisplayHelperService } from 'src/app/shared/services/view-display-helper.service';
import { ViewLoadData } from 'src/app/shared/models/view-load-data';

@Component({
  selector: 'app-load-data-section-params-kmeans',
  templateUrl: './load-data-section-params-kmeans.component.html',
  styleUrls: ['./load-data-section-params-kmeans.component.css']
})
export class LoadDataSectionParamsKmeansComponent implements OnInit {

  @Input()
  methodParams: Map<string, any>;
  @Input()
  viewLoadData: ViewLoadData;

  centers: number;
  iter_max: number;
  nstart: number;
  distanceMethod: Array<string>;
  loadDataService: ViewClusteringDataService;
  viewHelperService: ViewDisplayHelperService;
  selectedDistancerMethod: string;

  constructor(loadDataService: ViewClusteringDataService,
    viewHelperService: ViewDisplayHelperService) {
    this.loadDataService = loadDataService;
    this.viewHelperService = viewHelperService;
  }

  ngOnInit() {
    this.distanceMethod = this.methodParams[KmeansFields.DISTANCE_METHODS] as Array<string>;
  }

  public onNext(event): void {

    const params = {};
    console.log('k: ' + KmeansFields.CENTERS + ' value: ' +  this.centers);
    params[KmeansFields.CENTERS] = this.centers;
    params[KmeansFields.DISTANCE_METHOD] = this.selectedDistancerMethod;
    params[KmeansFields.ITER_MAX] = this.iter_max;
    params[KmeansFields.NSTART] = this.nstart;
    console.log('kmeas params-- ' + JSON.stringify(params));
    this.viewLoadData.params = params;
    console.log('kmeas data-- ' + JSON.stringify(this.viewLoadData));
    this.loadDataService.setViewData(this.viewLoadData);
    this.viewHelperService.setViewData(SectionType.UPLOAD_SECTION);
  }

  public onBack(event): void {
    this.viewHelperService.setViewData(SectionType.DECIMAL_OPERATOR_SECTION);
  }

}
