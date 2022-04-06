import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ThemingService } from './services/theming.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersonalWebsite';

  constructor() {}
}
