import { SectionType } from 'src/app/shared/models/section-type.enum';
import { DianaFields } from './../../shared/models/diana-fields.enum';
import { Component, OnInit, Input } from '@angular/core';
import { ViewClusteringDataService } from 'src/app/shared/services/view-clustering-data.service';
import { ViewDisplayHelperService } from 'src/app/shared/services/view-display-helper.service';
import { ViewLoadData } from 'src/app/shared/models/view-load-data';

@Component({
  selector: 'app-load-data-section-params-diana',
  templateUrl: './load-data-section-params-diana.component.html',
  styleUrls: ['./load-data-section-params-diana.component.css']
})
export class LoadDataSectionParamsDianaComponent implements OnInit {

  @Input()
  methodParams: Map<string, any>;
  @Input()
  viewLoadData: ViewLoadData;

  clusters: number;
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
    this.distanceMethod = this.methodParams[DianaFields.DISTANCE_METHODS] as Array<string>;
  }

  public onNext(event): void {

    const params = new Map<string, any>();
    params.set(DianaFields.CLUSTERS, this.clusters);
    params.set(DianaFields.DISTANCE_METHOD, this.selectedDistancerMethod);
    this.viewLoadData.params = params;

    this.loadDataService.setViewData(this.viewLoadData);
    this.viewHelperService.setViewData(SectionType.UPLOAD_SECTION);
  }

  public onBack(event): void {
    this.viewHelperService.setViewData(SectionType.DECIMAL_OPERATOR_SECTION);
  }

}
