import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
