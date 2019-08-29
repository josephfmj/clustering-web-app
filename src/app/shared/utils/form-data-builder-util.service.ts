import { ClusteringRequest } from './../models/clustering-request';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataBuilderUtilService {

  constructor() { }

  public buildClusteringFormDataRequest(request: ClusteringRequest): FormData {
    const data: FormData = new FormData();
    const params = {};
    params['params'] = request.data;
    data.append('clusteringData', JSON.stringify(params));
    data.append('csvFile', request.csvFile);
    console.log('file ' + request.csvFile);
    return data;
  }
}
