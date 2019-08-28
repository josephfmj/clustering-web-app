import { SectionType } from 'src/app/shared/models/section-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { ViewClusteringDataService } from 'src/app/shared/services/view-clustering-data.service';
import { ViewDisplayHelperService } from 'src/app/shared/services/view-display-helper.service';
import { ViewLoadData } from 'src/app/shared/models/view-load-data';

@Component({
  selector: 'app-load-data-section-decimal-operator',
  templateUrl: './load-data-section-decimal-operator.component.html',
  styleUrls: ['./load-data-section-decimal-operator.component.css']
})
export class LoadDataSectionDecimalOperatorComponent implements OnInit {

  @Input()
  viewLoadData: ViewLoadData;
  decimalOperator: string;
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

    this.viewLoadData.decimalSeparator = this.decimalOperator;
    this.loadDataService.setViewData(this.viewLoadData);
    this.viewHelperService.setViewData(SectionType.PARAMS_SECTION);
  }

  public onBack(event): void {
    this.viewHelperService.setViewData(SectionType.CLUSTERING_METHOD_SECTION);
  }
}
