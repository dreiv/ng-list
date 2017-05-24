import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  hits = [
    {
      title: "Catei",
      count: 20,
      hasSubHits: true,
    },
    {
      title: "Maimute",
      count: 3,
      hasSubHits: false
    }
  ]

  constructor() { }

  getSubHits(hit: any) {
    hit.subHits = [{
      title: "Potoci",
      count: 13
    },
      {
        title: "Molfaitori",
        count: 7
      }];
  }
}
