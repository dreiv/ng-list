import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';


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
    const response = [{
      title: "Potoci",
      count: 13
    },
      {
        title: "Molfaitori",
        count: 7
      }];

    Observable.of(response)
        .delay(2000)
        .subscribe( function(x) {
      hit.subHits = x;
    })};
}
