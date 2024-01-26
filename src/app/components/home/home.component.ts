import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, MainContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
