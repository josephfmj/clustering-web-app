import { ViewData } from '../../shared/models/view-load-data';
import { ViewDisplayHelperService } from './../../shared/services/view-display-helper.service';
import { ClaraFields } from './../../shared/models/clara-fields.enum';
import { ClusteringRequest } from './../../shared/models/clustering-request';
import { HttpService } from './../../shared/services/http.service';
import { Component, OnInit } from '@angular/core';
import { SectionType } from 'src/app/shared/models/section-type.enum';

@Component({
  selector: 'app-load-data-section-params-clara',
  templateUrl: './load-data-section-params-clara.component.html',
  styleUrls: ['./load-data-section-params-clara.component.css']
})
export class LoadDataSectionParamsClaraComponent implements OnInit {

  clusters: number;
  stand: boolean;
  samples: number;
  pamLike: boolean;
  metodoDistancia: string;
  metodosDistancia: string[];
  viewService: ViewDisplayHelperService;

  constructor(viewService: ViewDisplayHelperService) {
    this.viewService = viewService;
  }

  ngOnInit() {
  }

  public buildData(): void {

    const request: ClusteringRequest = new ClusteringRequest();
    request[ClaraFields.CLUSTERS] = this.clusters;
    request[ClaraFields.STAND] = this.stand;
    request[ClaraFields.SAMPLES] = this.samples;
    request[ClaraFields.PAM_LIKE] = this.pamLike;
    request[ClaraFields.DISTANCE_METHOD] = this.metodoDistancia;

    const viewData: ViewData = new ViewData();
    viewData.type = SectionType.UPLOAD_SECTION;
    viewData.order = 1;
    viewData.request = request;
    this.viewService.setViewData(viewData);
  }


}
