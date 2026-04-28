import { Component, input } from '@angular/core';
import { Requests } from '../request.model';

@Component({
  selector: 'app-request',
  imports: [],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss',
})
export class RequestComponent {
  data = input.required<Requests>();
}
