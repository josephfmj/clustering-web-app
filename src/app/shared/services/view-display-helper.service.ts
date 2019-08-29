import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SectionType } from '../models/section-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ViewDisplayHelperService {

  private displayHelperType = new BehaviorSubject<SectionType>(SectionType.DEFAULT);

  constructor() {
  }

  getViewDisplayHelper(): BehaviorSubject<SectionType> {
    return this.displayHelperType;
  }

  setViewData(data: SectionType): void {
    this.displayHelperType.next(data);
  }

}
