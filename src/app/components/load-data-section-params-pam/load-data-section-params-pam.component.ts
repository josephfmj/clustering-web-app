import { SectionType } from 'src/app/shared/models/section-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { ViewClusteringDataService } from 'src/app/shared/services/view-clustering-data.service';
import { ViewDisplayHelperService } from 'src/app/shared/services/view-display-helper.service';
import { ViewLoadData } from 'src/app/shared/models/view-load-data';
import { PamFields } from 'src/app/shared/models/pam-fields.enum';

@Component({
  selector: 'app-load-data-section-params-pam',
  templateUrl: './load-data-section-params-pam.component.html',
  styleUrls: ['./load-data-section-params-pam.component.css']
})
export class LoadDataSectionParamsPamComponent implements OnInit {

  @Input()
  methodParams: Map<string, any>;
  @Input()
  viewLoadData: ViewLoadData;

  clusters: number;
  swap: boolean;
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
    this.distanceMethod = this.methodParams[PamFields.DISTANCE_METHODS] as Array<string>;
  }

  public onNext(event): void {
    const params = new Map<string, any>();
    params.set(PamFields.CLUSTERS, this.clusters);
    params.set(PamFields.DISTANCE_METHOD, this.selectedDistancerMethod);
    params.set(PamFields.SWAP, this.swap);
    this.viewLoadData.params = params;
    this.loadDataService.setViewData(this.viewLoadData);
    this.viewHelperService.setViewData(SectionType.UPLOAD_SECTION);
  }

  public onBack(event): void {
    this.viewHelperService.setViewData(SectionType.DECIMAL_OPERATOR_SECTION);
  }

}
