import { ContentName } from './../../shared/models/content-name.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.css']
})
export class MenuAppComponent implements OnInit {

  content: ContentName;

  constructor() {
    //this.content = ContentName.DEFAULT;
  }

  ngOnInit() {
  }

  public chekResult(event): void {
    console.log('chekResult' + ContentName.QUERY_RESULT);
    this.content = ContentName.QUERY_RESULT;
    console.log('this.content chekResult ' + ContentName[this.content]);
  }

  public loadData(event): void {
    console.log('loadData' + ContentName.LOAD_DATA);
    this.content = ContentName.LOAD_DATA;
    console.log('this.content loadData ' + ContentName[this.content]);
  }

}
