import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { SpecialitiesBoxComponent } from '../specialities-box/specialities-box.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { SectionAboutComponent } from '../section-about/section-about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, MainContentComponent, SpecialitiesBoxComponent, SectionTitleComponent,
  SectionAboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
