import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  name = 'abm';

  constructor() { }

  ngOnInit(): void {
    console.log('page1');
  }

  pageEvent(page: any) {
    console.log(page);
  }

}
