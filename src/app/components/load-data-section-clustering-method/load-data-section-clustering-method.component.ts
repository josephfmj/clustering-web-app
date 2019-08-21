import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-data-section-clustering-method',
  templateUrl: './load-data-section-clustering-method.component.html',
  styleUrls: ['./load-data-section-clustering-method.component.css']
})
export class LoadDataSectionClusteringMethodComponent implements OnInit {

  @Input()
  clusteringMethodList: string[];

  selectedMethod: string;

  constructor() { }

  ngOnInit() {
  }

  public onNext(): void {

  }

  public onBack(): void {

  }

}
