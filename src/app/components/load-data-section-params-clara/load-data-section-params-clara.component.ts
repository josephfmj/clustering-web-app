import { ViewLoadData } from '../../shared/models/view-load-data';
import { ViewDisplayHelperService } from './../../shared/services/view-display-helper.service';
import { ClaraFields } from './../../shared/models/clara-fields.enum';
import { ClusteringRequest } from './../../shared/models/clustering-request';
import { HttpService } from './../../shared/services/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { SectionType } from 'src/app/shared/models/section-type.enum';
import { ViewClusteringDataService } from 'src/app/shared/services/view-clustering-data.service';

@Component({
  selector: 'app-load-data-section-params-clara',
  templateUrl: './load-data-section-params-clara.component.html',
  styleUrls: ['./load-data-section-params-clara.component.css']
})
export class LoadDataSectionParamsClaraComponent implements OnInit {

  @Input()
  methodParams: Map<string, any>;
  @Input()
  viewLoadData: ViewLoadData;

  clusters: number;
  stand: boolean;
  samples: number;
  pamLike: boolean;
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
    this.distanceMethod = this.methodParams[ClaraFields.DISTANCE_METHODS] as Array<string>;
  }

  public onNext(event): void {

    const params = new Map<string, any>();
    params.set(ClaraFields.CLUSTERS, this.clusters);
    params.set(ClaraFields.DISTANCE_METHOD, this.selectedDistancerMethod);
    params.set(ClaraFields.PAM_LIKE, this.pamLike);
    params.set(ClaraFields.SAMPLES, this.samples);
    params.set(ClaraFields.STAND, this.stand);
    this.viewLoadData.params = params;

    this.loadDataService.setViewData(this.viewLoadData);
    this.viewHelperService.setViewData(SectionType.UPLOAD_SECTION);
  }

  public onBack(event): void {
    this.viewHelperService.setViewData(SectionType.DECIMAL_OPERATOR_SECTION);
  }


}
