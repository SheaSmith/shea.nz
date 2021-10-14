import { Component, OnInit } from '@angular/core';
import { ThemingService } from '../services/theming.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public themingService: ThemingService) { }

  ngOnInit() {
  }

}
