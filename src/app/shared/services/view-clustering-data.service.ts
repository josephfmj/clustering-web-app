import { ViewLoadData } from '../models/view-load-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewClusteringDataService {

  private viewClusteringDataSubject = new BehaviorSubject<ViewLoadData>(null);
  private viewClusteringDataObservable = this.viewClusteringDataSubject.asObservable();

  constructor() { }

  public getViewClustering(): Observable<ViewLoadData> {
    return this.viewClusteringDataObservable;
  }

  public setViewData(data: ViewLoadData): void {
    this.viewClusteringDataSubject.next(data);
  }
}
