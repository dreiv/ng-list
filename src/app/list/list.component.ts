import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  private response = [
    { title: "Potoci", count: 13 },
    { title: "Molfaitori", count: 7
  }];

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

  toggleSubHits(event, hit) {
    const element: HTMLInputElement = event.target;

    element.disabled = true;
    Observable.of(this.response)
        .delay(2000)
        .subscribe( function(x) {
          hit.subHits = x;
          element.disabled = false
        })
  }
}
