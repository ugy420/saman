import { Component, computed, input } from '@angular/core';
import { Requests } from '../request.model';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-request',
  imports: [ItemsComponent],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss',
})
export class RequestComponent {
  data = input.required<any>();
  
}
