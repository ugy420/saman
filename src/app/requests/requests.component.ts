import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Requests } from './request.model';
import { DUMMY_REQ } from './dummy-req';
import { RequestComponent } from './request/request.component'

@Component({
  selector: 'app-requests.component',
  imports: [FormsModule, RequestComponent],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
})
export class RequestsComponent {
  requests: Requests[] = (DUMMY_REQ) 
  onSubmit(){
    
  }
}
