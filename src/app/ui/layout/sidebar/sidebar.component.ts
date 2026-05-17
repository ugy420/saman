import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  options = [
    {
      img: '/home.svg',
      text: 'Dashboard',
      link: '/dashboard'
    },
    {
      img: '/volunteer_activism.svg',
      text: 'Request',
      link: '/request'
    },
  ]
}
