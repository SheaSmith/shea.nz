import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Home } from '../models/home';
import { PageService } from '../services/page.service';
import { ThemingService } from '../services/theming.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public home: Home = null;

  constructor(public themingService: ThemingService, private pageService: PageService) {
    this.pageService.getHome().subscribe(s => this.home = s);
  }

  ngOnInit() {
  }

}
