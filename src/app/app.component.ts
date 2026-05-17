import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { SidebarComponent } from "./ui/layout/sidebar/sidebar.component";
import { NavbarComponent } from "./ui/layout/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('trials');
}
