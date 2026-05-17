import { Component, signal } from '@angular/core';
import { DUMMY_REQ } from '../../requests/dummy-req';
import { Requests } from '../../requests/request.model';

@Component({
  selector: 'app-recent-request',
  imports: [],
  templateUrl: './recent-request.component.html',
  styleUrl: './recent-request.component.scss',
})
export class RecentRequestComponent {
  requests = signal<Requests[]>([]);
}
