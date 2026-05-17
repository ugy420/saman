import { Component, input } from '@angular/core';
import { ItemModel } from './item.model';

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  itm = input.required<ItemModel>()
}
