import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  @Input() name: string;
  student = [
    {
      name: 'one',
    },
    {
      name: 'two',
    },
    {
      name: 'three',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
