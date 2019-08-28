import { ContentName } from './../../shared/models/content-name.enum';
import { SectionType } from 'src/app/shared/models/section-type.enum';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css']
})
export class MenuContentComponent implements OnInit, OnChanges {

  @Input()
  content: ContentName;
  other: ContentName;
  query: boolean;
  loadData: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.other = this.content;
    this.query = this.content === ContentName.QUERY_RESULT;
    this.loadData = this.content === ContentName.LOAD_DATA;
    console.log('MenuContentComponent_other: ' + ContentName[this.other]);
    console.log('MenuContentComponent: ' + ContentName[this.content]);
    console.log('query: ' + this.query);
    console.log('loadData: ' + this.loadData);
  }

}
