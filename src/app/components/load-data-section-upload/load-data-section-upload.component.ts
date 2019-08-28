import { SectionType } from 'src/app/shared/models/section-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { ViewClusteringDataService } from 'src/app/shared/services/view-clustering-data.service';
import { ViewDisplayHelperService } from 'src/app/shared/services/view-display-helper.service';
import { ViewLoadData } from 'src/app/shared/models/view-load-data';

@Component({
  selector: 'app-load-data-section-upload',
  templateUrl: './load-data-section-upload.component.html',
  styleUrls: ['./load-data-section-upload.component.css']
})
export class LoadDataSectionUploadComponent implements OnInit {

  @Input()
  viewLoadData: ViewLoadData;
  @Input()
  executionId: string;
  @Input()
  resultVisible: boolean;

  csvFile: File;
  loadDataService: ViewClusteringDataService;
  viewHelperService: ViewDisplayHelperService;

  constructor(loadDataService: ViewClusteringDataService,
    viewHelperService: ViewDisplayHelperService) {
    this.loadDataService = loadDataService;
    this.viewHelperService = viewHelperService;
  }

  ngOnInit() {
  }

  public onFinish(event): void {

    const file = (this.csvFile as Blob);
    console.log('csvFile type: ' + this.csvFile.type);
    console.log('csvFile size: ' +  this.csvFile.size);
    console.log('BlobFile type: ' + file.type);
    console.log('BlobFile size: ' + file.size);
    this.viewLoadData.file = file;
    this.loadDataService.setViewData(this.viewLoadData);
    this.viewHelperService.setViewData(SectionType.SEND_DATA);
  }

  public onBack(event): void {
    this.viewHelperService.setViewData(SectionType.PARAMS_SECTION);
  }

}
