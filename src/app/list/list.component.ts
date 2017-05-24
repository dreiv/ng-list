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
      subhits: [
        {
          title: "Potoci",
          count: 13
        },
        {
          title: "Molfaitori",
          count: 7
        }
      ]
    },
    {
      title: "Maimute",
      count: 3
    }
  ]

  constructor() { }
}
