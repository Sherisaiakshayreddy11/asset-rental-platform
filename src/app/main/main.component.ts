import { Component } from '@angular/core';
import { MainContentComponent } from "../main-content/main-content.component";
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainContentComponent,KENDO_DROPDOWNS],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public listItems: Array<string> = [
    "All",
    "KFS",
    "TSL",
    "SKS",
    "RSH"
  ];
}
