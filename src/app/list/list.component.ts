import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
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
    },
    {
      title: "Pesti",
      count: 9,
      hasSubHits: true,
    },
  ];

  @ViewChildren('checkbox') toggles: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.toggles.forEach(component => {
      const toggle = component.nativeElement;
      const index:number = +toggle.id.match(/\d+$/);
      const cancelClick = this.renderer.listen(toggle, 'click', () => {
        cancelClick();

        this.renderer.setProperty(toggle, 'disabled', 'true');
        Observable.of(this.response)
          .delay(2000)
          .subscribe( (data) => {
            this.hits[index]["subHits"] = data;
            this.renderer.setProperty(toggle, 'disabled', null);
        });
      });
    });
  }
}
