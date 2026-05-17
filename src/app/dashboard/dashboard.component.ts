import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SummaryComponent } from '../ui/summary/summary.component';
import { RecentRequestComponent } from "./recent-request/recent-request.component";
import { QuickActionsComponent } from "./quick-actions/quick-actions.component";

@Component({
  selector: 'app-dashboard',
  imports: [SummaryComponent, RecentRequestComponent, QuickActionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  router = inject(Router);

  onRequest(){
    this.router.navigate(['request']);
  }
}
