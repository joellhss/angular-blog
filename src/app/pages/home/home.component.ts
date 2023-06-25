import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bigCardId: number = dataFake[0].id
  bigCardTitle: string = dataFake[0].title
  bigCardCoverPhoto: string = dataFake[0].photo
  bigCardDescription: string = dataFake[0].description
  bigCardDate: string = dataFake[0].date

}
