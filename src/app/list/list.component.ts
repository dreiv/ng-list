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

  @ViewChildren('checkbox') checkboxList: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.checkboxList.forEach(component => {
      const element = component.nativeElement;
      const index:number = +component.nativeElement.id.match(/\d+$/);
      const cancelClick = this.renderer.listen(element, 'click', () => {
        cancelClick();

        this.renderer.setProperty(element, 'disabled', 'true');
          Observable.of(this.response)
            .delay(2000)
            .subscribe( (data) => {
              this.hits[index]["subHits"] = data;
              this.renderer.setProperty(element, 'disabled', null);
            })

          console.log('should not click any more');
        });
    })
  }
}
