import { ViewLoadData } from '../models/view-load-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewClusteringDataService {

  private viewClusteringDataSubject = new BehaviorSubject<ViewLoadData>(new ViewLoadData());

  constructor() { }

  public getViewClustering(): BehaviorSubject<ViewLoadData> {
    return this.viewClusteringDataSubject;
  }

  public setViewData(data: ViewLoadData): void {
    this.viewClusteringDataSubject.next(data);
  }
}
