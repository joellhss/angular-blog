import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  photoCover: string = "";
  @Input()
  contentDate: string = "";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "";
  @Input()
  contentText: string[] = [];

  private id: string | null = ""


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id")
    })
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null) {
    const result = dataFake.filter(article => article.id.toString() === id)[0]
    console.log(result)

    this.photoCover = result.photo
    this.contentDate = result.date
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentText = result.text
  }
}
