import { ClusteringMethodConfig } from './../models/clustering-method-config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getAllClusteringMehtod(url: string): Observable<ClusteringMethodConfig[]> {

    return this.http.get<ClusteringMethodConfig[]>(url);
  }

  public sendClusteringData(url: string, clusteringData: FormData): Observable<any> {

    return this.http.post<any>(url, clusteringData);
  }

  public downLoadClusteringExecution(url: string): Observable<Blob> {

    return this.http.get<Blob>(url);
  }

  public checkClusteringDataExecution(url: string): Observable<any> {

    return this.http.get(url);
  }
}
