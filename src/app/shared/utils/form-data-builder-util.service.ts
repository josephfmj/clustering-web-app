import { ClusteringRequest } from './../models/clustering-request';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataBuilderUtilService {

  constructor() { }

  public buildClusteringFormDataRequest(request: ClusteringRequest): FormData {
    const data: FormData = new FormData();
    data.append('clusteringData', JSON.stringify(request.data));
    data.append('csvFile', request.csvFile);

    return data;
  }
}
