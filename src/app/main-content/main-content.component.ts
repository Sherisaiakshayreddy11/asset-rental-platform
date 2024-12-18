import { Component } from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [KENDO_GRID],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
