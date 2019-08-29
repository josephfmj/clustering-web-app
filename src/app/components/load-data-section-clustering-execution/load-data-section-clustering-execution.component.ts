import { ContentName } from './../../shared/models/content-name.enum';
import { SectionType } from './../../shared/models/section-type.enum';
import { ServiceUrl } from './../../shared/models/service-url.enum';
import { HttpService } from './../../shared/services/http.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-data-section-clustering-execution',
  templateUrl: './load-data-section-clustering-execution.component.html',
  styleUrls: ['./load-data-section-clustering-execution.component.css']
})
export class LoadDataSectionClusteringExecutionComponent implements OnInit {

  executionId: string;
  fileUrl: string;
  visible: boolean;
  httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
    this.visible = false;
  }

  ngOnInit() {
    console.log('LoadDataSectionClusteringExecutionComponent_C: ');
  }

  public getResponse(event): void {
    if ( this.fileUrl !== undefined) {
      URL.revokeObjectURL(this.fileUrl);
    }

    const url = ServiceUrl.DOWNLOAD_CLUSTERING_EXECUTION + this.executionId;
    console.log('url check : ' + url);
    this.httpService
    .downLoadClusteringExecution(url)
    .subscribe( data => {
      console.log(data);
      this.fileUrl = URL.createObjectURL(data);
      this.visible = true;
    });
  }

}
