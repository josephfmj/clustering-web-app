import { AgnesFields } from './../../shared/models/agnes-fields.enum';
import { SectionType } from './../../shared/models/section-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { ViewClusteringDataService } from 'src/app/shared/services/view-clustering-data.service';
import { ViewDisplayHelperService } from 'src/app/shared/services/view-display-helper.service';
import { ViewLoadData } from 'src/app/shared/models/view-load-data';

@Component({
  selector: 'app-load-data-section-params-agnes',
  templateUrl: './load-data-section-params-agnes.component.html',
  styleUrls: ['./load-data-section-params-agnes.component.css']
})
export class LoadDataSectionParamsAgnesComponent implements OnInit {

  @Input()
  methodParams: Map<string, any>;
  @Input()
  viewLoadData: ViewLoadData;

  loadDataService: ViewClusteringDataService;
  viewHelperService: ViewDisplayHelperService;
  clusterMethod: Array<string>;
  distanceMethod: Array<string>;
  selectedClusterMethod: string;
  selectedDistancerMethod: string;
  clusters: number;

  constructor(loadDataService: ViewClusteringDataService,
    viewHelperService: ViewDisplayHelperService) {
    this.loadDataService = loadDataService;
    this.viewHelperService = viewHelperService;
  }

  ngOnInit() {
    this.clusterMethod = this.methodParams[AgnesFields.CLUSTERING_METHODS] as Array<string>;
    this.distanceMethod = this.methodParams[AgnesFields.DISTANCE_METHODS] as Array<string>;
  }

  public onNext(event): void {
    const params = new Map<string, any>();
    params.set(AgnesFields.CLUSTERS, this.clusters);
    params.set(AgnesFields.DISTANCE_METHOD, this.selectedDistancerMethod);
    params.set(AgnesFields.CLUSTERING_METHODS, this.selectedClusterMethod);
    this.viewLoadData.params = params;

    this.loadDataService.setViewData(this.viewLoadData);
    this.viewHelperService.setViewData(SectionType.UPLOAD_SECTION);
  }

  public onBack(event): void {
    this.viewHelperService.setViewData(SectionType.DECIMAL_OPERATOR_SECTION);
  }


}
