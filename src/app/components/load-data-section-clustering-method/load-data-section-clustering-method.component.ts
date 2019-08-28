import { SectionType } from './../../shared/models/section-type.enum';
import { ViewLoadData } from './../../shared/models/view-load-data';
import { Component, OnInit, Input } from '@angular/core';
import { ViewClusteringDataService } from 'src/app/shared/services/view-clustering-data.service';
import { ViewDisplayHelperService } from 'src/app/shared/services/view-display-helper.service';

@Component({
  selector: 'app-load-data-section-clustering-method',
  templateUrl: './load-data-section-clustering-method.component.html',
  styleUrls: ['./load-data-section-clustering-method.component.css']
})
export class LoadDataSectionClusteringMethodComponent implements OnInit {

  @Input()
  clusteringMethodList: string[];
  @Input()
  viewLoadData: ViewLoadData;

  selectedMethod: string;
  loadDataService: ViewClusteringDataService;
  viewHelperService: ViewDisplayHelperService;

  constructor(loadDataService: ViewClusteringDataService,
    viewHelperService: ViewDisplayHelperService) {
    this.loadDataService = loadDataService;
    this.viewHelperService = viewHelperService;
  }

  ngOnInit() {
  }

  public onNext(event): void {
    this.viewLoadData.method = this.selectedMethod;
    this.loadDataService.setViewData(this.viewLoadData);
    this.viewHelperService.setViewData(SectionType.DECIMAL_OPERATOR_SECTION);
  }

}
