import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DUMMY_REQ } from './dummy-req';
import { RequestComponent } from './request/request.component'
import { SummaryComponent } from '../ui/summary/summary.component';
import { HttpClient } from '@angular/common/http';

type RequestDto = {
  id: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | string;
  userId: number | string;      // backend may return string; you can later normalize to number
  requestedAt: string;          // ISO string from backend
  items: Request[];
};

@Component({
  selector: 'app-requests.component',
  imports: [FormsModule, RequestComponent, SummaryComponent],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
})
export class RequestsComponent {
  requests = signal<RequestDto[]>([]);

  httpClient = inject(HttpClient);

  ngOnInit(){
    this.httpClient.get<RequestDto[]>('http://localhost:3000/requests/1').subscribe({
      next: (data) => {
        console.log('s', data)
        this.requests.set(data)
      }
    })
  }
}
